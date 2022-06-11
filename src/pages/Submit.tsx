import React, { useRef, useState } from 'react';
import type { FC } from 'react';
import type { FormInstance } from 'antd';
import { Card, Result, Form, Input, Button, Descriptions, Divider, Alert, Statistic, Row, Col } from 'antd';
import ImageUploader from '@/components/RightContent/ImageUploader'
import ProForm, { ProFormDigit, ProFormSelect, ProFormUploadButton, ProFormText, StepsForm, ProFormTextArea, ProFormSwitch, ProFormDateTimePicker } from '@ant-design/pro-form';
import type { StepDataType } from './data'
import styles from './Submit.less';
import { TwitterSquareFilled } from '@ant-design/icons';
import IconFont from '@/constants/icon/index';

export type ProjectInfoFormFields = {
  name: string
  description: string
  infoUri: string
  logoUri: string
  twitter: string
  discord: string
  payButton: string
  payDisclosure: string
  version: number
}


const StepDescriptions: React.FC<{
  stepData: StepDataType;
  bordered?: boolean;
}> = ({ stepData, bordered }) => {
  const { payAccount, receiverAccount, receiverName, amount } = stepData;
  return (
    <Descriptions column={1} bordered={bordered}>
      <Descriptions.Item label="付款账户"> {payAccount}</Descriptions.Item>
      <Descriptions.Item label="收款账户"> {receiverAccount}</Descriptions.Item>
      <Descriptions.Item label="收款人姓名"> {receiverName}</Descriptions.Item>
      <Descriptions.Item label="转账金额">
        <Statistic
          value={amount}
          suffix={
            <span
              style={{
                fontSize: 14,
              }}
            >
              元
            </span>
          }
          precision={2}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

const StepResult: React.FC<{
  onFinish: () => Promise<void>;
}> = (props) => {
  return (
    <Result
      status="success"
      title="操作成功"
      subTitle="预计两小时内到账"
      extra={
        <>
          <Button type="primary" onClick={props.onFinish}>
            再转一笔
          </Button>
          <Button>查看账单</Button>
        </>
      }
      className={styles.result}
    >
      {props.children}
    </Result>
  );
};

const submit: React.FC = () => {

  const [stepData, setStepData] = useState<StepDataType>({
    payAccount: '',
    receiverAccount: '',
    receiverName: '',
    amount: '',
    receiverMode: '',
  });
  const [current, setCurrent] = useState(0);
  const formRef = useRef<FormInstance>();
  const LAYOUT_TYPE_HORIZONTAL = 'horizontal';
  const formItemLayout = {
    labelCol: { span: 10 }
  };

  return (
    <Card bordered={false}>
      <StepsForm
        current={current}
        onCurrentChange={setCurrent}
        submitter={{
          render: (props, dom) => {
            if (props.step === 0) {
              return <Button type="primary" onClick={() => props.onSubmit?.()}>
                NEXT: File Function
              </Button>
            }
            if (props.step === 2) {
              return null;
            }
            return dom;
          },

        }}
      >
        <StepsForm.StepForm<StepDataType>
          formRef={formRef}
          title="Project Info"
          layout={LAYOUT_TYPE_HORIZONTAL}
          {...formItemLayout}
          initialValues={stepData}
          onFinish={async (values) => {
            setStepData(values);
            return true;
          }}
        >
          <div className={styles.submit1}>
            <Form.Item label="Logo">
              <ImageUploader title='Upload' />
            </Form.Item>

            <Form.Item label="Project Banner">
              <ImageUploader title="Upload Banner" />
            </Form.Item>

            {/* <Upload /> */}
            <ProFormText
              colProps={{ md: 12, xl: 8 }}
              label="Project Name"
              width="md"
              name="payAccount"
              rules={[{ required: true, message: '' }]}
            />

            <ProFormTextArea
              label="Project Description"
              width="md"
              name="receiverName"
            />
            <ProFormSelect
              options={[
                {
                  value: 'Ethereum',
                  label: 'Ethereum',
                }
              ]}
              rules={[{ required: true, message: '' }]}
              width="md"
              name="taxRate"
              label="Operating Chain"
            />
            <ProFormText
              label="Contract Address"
              rules={[{ required: true, message: '' }]}
              name="amount"
              width="md"
            />
            <Form.Item label="Account Info">

              <Row align="middle" style={{ margin: '8px 0' }}>
                <Col span={2}><TwitterSquareFilled style={{ fontSize: '23px' }} /></Col>
                <Col span={8}><Input placeholder="Basic usage" size="small" /></Col>
              </Row>
              <Row align="middle" style={{ margin: '17px 0' }}>
                <Col span={2}><TwitterSquareFilled style={{ fontSize: '23px' }} /></Col>
                <Col span={8}><Input placeholder="Basic usage" size="small" /></Col>
              </Row>
              <Row align="middle" style={{ margin: '17px 0' }}>
                <Col span={2}><TwitterSquareFilled style={{ fontSize: '23px' }} /></Col>
                <Col span={8}><Input placeholder="Basic usage" size="small" /></Col>
              </Row>
            </Form.Item>
            <ProFormText
              colProps={{ md: 12, xl: 8 }}
              label="Total Supply"
              width="md"
              name=""
            />
            <ProFormText
              colProps={{ md: 12, xl: 8 }}
              label="Max Amount per address"
              width="md"
              name=""
            />
            <ProFormSwitch name="switch" label="Refundable" />
            <ProFormDateTimePicker
              name="dateTime"
              label="Start Time"
              fieldProps={{
                format: (value) => value.format('YYYY-MM-DD'),
              }}
            />
          </div>

        </StepsForm.StepForm>

        <StepsForm.StepForm title="Mint Function">
          <div className={styles.result}>
            <Alert
              closable
              showIcon
              message="确认转账后，资金将直接打入对方账户，无法退回。"
              style={{ marginBottom: 24 }}
            />
            <StepDescriptions stepData={stepData} bordered />
            <Divider style={{ margin: '24px 0' }} />
            <ProFormText.Password
              label="支付密码"
              width="md"
              name="password"
              required={false}
              rules={[{ required: true, message: '需要支付密码才能进行支付' }]}
            />
          </div>
        </StepsForm.StepForm>
        <StepsForm.StepForm title="Check & Submit">
          <StepResult
            onFinish={async () => {
              setCurrent(0);
              formRef.current?.resetFields();
            }}
          >
            <StepDescriptions stepData={stepData} />
          </StepResult>
        </StepsForm.StepForm>
      </StepsForm>
      {/* <Divider style={{ margin: '40px 0 24px' }} /> */}
    </Card >
  );

  // return (
  //   <PageContainer header={{
  //     title: '',
  //     breadcrumb: {},
  //   }}>
  //     <Card>
  //       {/* <ImageUploader /> */}

  //     </Card>
  //   </PageContainer>
  // );
};

export default submit;
