import { CloseCircleFilled } from '@ant-design/icons'
import { FileImageOutlined } from '@ant-design/icons'
import { Button, Col, message, Row, Space, Upload } from 'antd'
import { ThemeContext } from '@/contexts/themeContext'
import { useContext, useLayoutEffect, useState } from 'react'
import { ipfsCidUrl, pinFileToIpfs } from '@/utils/ipfs'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import ExternalLink from './ExternalLink'

enum ByteUnit {
  KB = 'KB',
  MB = 'MB',
}

export default function ImageUploader({
  initialUrl,
  onSuccess,
  maxSizeKBs: maxSize,
  metadata,
  title
}: {
  initialUrl?: string
  metadata?: Record<string | number, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  onSuccess?: (url?: string) => void
  maxSizeKBs?: number // KB
  title?: string
}) {
  const [url, setUrl] = useState<string | undefined>(initialUrl)
  const [loadingUpload, setLoadingUpload] = useState<boolean>()

  const { theme } = useContext(ThemeContext)

  const setValue = (cid?: string) => {
    const newUrl = cid ? ipfsCidUrl(cid) : undefined
    setUrl(newUrl)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onSuccess && onSuccess(newUrl)
  }

  const uploadButton = (
    <div>
      {loadingUpload ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>{title}</div>
    </div>
  );

  useLayoutEffect(() => setUrl(initialUrl), [initialUrl])

  return (
    <Row
      style={{
        color: theme.colors.text.secondary,
      }}
      gutter={30}
    >
      <Col xs={24} md={7}>
        <Space align="start">
          {url && (
            <img
              style={{
                maxHeight: 80,
                maxWidth: 120,
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: theme.radii.md,
              }}
              src={url}
              alt="Uploaded image"
            />
          )}

          {url ? (
            <Button
              icon={<CloseCircleFilled />}
              type="text"
              onClick={() => setValue()}
            />
          ) : (
            <Upload
              accept="image/png, image/jpeg, image/jpg, image/gif"
              listType="picture-card"
              beforeUpload={file => {
                if (maxSize !== undefined && file.size > maxSize * 1000) {
                  const unit = maxSize > 999 ? ByteUnit.MB : ByteUnit.KB
                  const formattedSize =
                    unit === ByteUnit.MB
                      ? (maxSize / 1000.0).toFixed(1)
                      : maxSize.toString()
                  message.error(
                    `File must be less than ${formattedSize}${unit}`,
                  )
                  return Upload.LIST_IGNORE
                }
              }}
              customRequest={async req => {
                setLoadingUpload(true)
                const res = await pinFileToIpfs(req.file, metadata)
                setValue(res.IpfsHash)
                setLoadingUpload(false)
              }}
              className="avatar-uploader"
            >
              {/* <Button loading={loadingUpload} type="text">
                <FileImageOutlined /> {text ?? null}
              </Button> */}
              {uploadButton}
            </Upload>
          )}
        </Space>
      </Col>
    </Row>
  )
}
