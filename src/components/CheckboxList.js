import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';

const CheckboxList = ({ defaultValue, title, plainOptions }) => {
  const [showAll, setShowAll] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    showAll ? setOptions(plainOptions) : setOptions(plainOptions.slice(0, 2))
  }, [showAll])
  console.log(defaultValue);
  return (
    <div className='sidebar__container'>
      <p>{title}</p>
      <Checkbox.Group style={{ width: '100%' }} options={options} value={defaultValue} />
      <p className='sidebar__expand' onClick={() => setShowAll(!showAll)}>{showAll ? 'Collapse' : 'Expand All'}</p>
    </div>
  )
}

export default CheckboxList;
