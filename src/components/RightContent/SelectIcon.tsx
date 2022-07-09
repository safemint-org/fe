import { CaretDownOutlined } from "@ant-design/icons"
import styles from './SelectIcon.less';

export default function SelectIcon(props) {
  const { iconName } = props
  const className = styles.SelectIcon;
  const selectName = [{
    key: 'en-US',
    value: 'EN'
  },
  { key: 'zh-CN', value: 'CN' }]

  const inlineStyle = {
    fontSize: 14
  };

  const obj = selectName.filter((item) => item.key === iconName)[0]
  return (
    <div style={inlineStyle}>
      <CaretDownOutlined />
      <span className={className}>{obj.value}</span>
    </div >
  )

}
