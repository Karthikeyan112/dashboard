import React, { useState } from 'react';
import './Sidebar.scss';
import { Button, DatePicker, Slider } from 'antd';
import CheckboxList from './CheckboxList';

const { RangePicker } = DatePicker;

const Sidebar = () => {
  const defaultValue = ['All'];
  const [country, setCountry] = useState(defaultValue)
  const [risk, setRisk] = useState(defaultValue)
  const [watchList, setWatchList] = useState(defaultValue)
  const [pepClass, setPepClass] = useState(defaultValue)
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

  const clearAll = () => {
    setCountry([]);
    setRisk([]);
    setWatchList([]);
    setPepClass([]);
  };

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
      <CheckboxList
        title='COUNTRY OF ORIGIN'
        plainOptions={['All', 'US', 'UK', 'Mexico']}
        defaultValue={country}
        onChange={setCountry} />
      <CheckboxList
        title='RISK LEVEL'
        plainOptions={['All', 'High', 'Medium', 'Low']}
        defaultValue={risk}
        onChange={setRisk} />
      <CheckboxList
        title='WATCH LIST'
        plainOptions={['All', 'Sanctions', 'Fitness & probity', 'Warnings']}
        defaultValue={watchList}
        onChange={setWatchList} />
      <CheckboxList
        title='PEP CLASS'
        plainOptions={['All', 'Class 1', 'Class 2', 'Class 3']}
        defaultValue={pepClass}
        onChange={setPepClass} />

      <div className='sidebar__container'>
        <Button onClick={clearAll}>Clear Filters<span className='sidebar__delete'>&#10005;</span> </Button>
      </div>
    </div>
  )
}

export default Sidebar;
