import React from 'react';
import { Checkbox, Row, Col } from 'antd';

const CheckboxList = ({ defaultValue, title, plainOptions }) => {
  console.log(defaultValue);
  return (
    <div className='sidebar__container'>
      <p>{title}</p>
      <Checkbox.Group style={{ width: '100%' }} options={plainOptions} value={defaultValue} />
    </div>
  )
}

export default CheckboxList;
