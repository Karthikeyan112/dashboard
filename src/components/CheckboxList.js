import React from 'react';
import { Checkbox, Row, Col } from 'antd';

const CheckboxList = ({ title, plainOptions }) => {
  return (
    <div className='sidebar__container'>
      <p>{title}</p>
      <Checkbox.Group >
        <Row>
          {plainOptions.map(plainOption => (
            <Col key={plainOption} span={24}>
              <Checkbox value={plainOption}>{plainOption}</Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </div>
  )
}

export default CheckboxList;
