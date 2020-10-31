import React from 'react';
import './Sidebar.scss';
import { Button, DatePicker, Slider } from 'antd';
import CheckboxList from './CheckboxList';

const { RangePicker } = DatePicker;

const Sidebar = () => {
  const marks = {
    0: '0',
    20: '20',
    40: '40',
    60: '60',
    80: '80',
    100: '100'
  };
  function formatter(value) {
    return `${value}%`;
  }
  const plainOptions = ['All', 'US', 'UK', 'Mexico'];

  return (
    <div className='sidebar'>
      <h3>Filters</h3>
      <div className='sidebar__container'>
        <p>DATE RANGE</p>
        <RangePicker format='DD/MM/YY' />
      </div>
      <div className='sidebar__container'>
        <p>MATCHING %</p>
        <Slider
          marks={marks}
          min={0}
          max={100}
          defaultValue={70}
          step={10}
          tipFormatter={formatter}
        // value={[minPayRate, maxPayRate]}
        // onChange={handlePayRateChange}
        // onAfterChange={onAfterChange}
        />
      </div>
      <CheckboxList title='COUNTRY OF ORIGIN' plainOptions={plainOptions} defaultValue={['All']} />
      <CheckboxList title='RISK LEVEL' plainOptions={['All', 'High', 'Medium', 'Low']} defaultValue={['All']} />
      <CheckboxList title='WATCH LIST' plainOptions={['All', 'Sanctions', 'Fitness & probity', 'Warnings']} defaultValue={['All']} />
      <CheckboxList title='PEP CLASS' plainOptions={['All', 'Class 1', 'Class 2', 'Class 3']} defaultValue={['All']} />

      <div className='sidebar__container'>
        <Button>Clear Filters<span className='sidebar__delete'>&#10005;</span> </Button>
      </div>
    </div>
  )
}

export default Sidebar;
