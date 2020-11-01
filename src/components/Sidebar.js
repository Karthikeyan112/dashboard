import React, { useState } from 'react';
import './Sidebar.scss';
import { Button, DatePicker, Slider } from 'antd';
import CheckboxList from './CheckboxList';

const { RangePicker } = DatePicker;

const Sidebar = ({ fields, setters }) => {
  const { country, risk, watchList, pepClass, matching } = fields;
  const { setCountry, setRisk, setWatchList, setPepClass, setMatching } = setters;
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
    setMatching(0)
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
          step={10}
          tipFormatter={formatter}
          value={matching}
          onChange={(e) => setMatching(e)}
        />
      </div>
      <CheckboxList
        title='COUNTRY OF ORIGIN'
        plainOptions={['All', 'US', 'UK', 'Mexico']}
        defaultValue={country}
        onChange={(e) => setCountry(e)} />
      <CheckboxList
        title='RISK LEVEL'
        plainOptions={['All', 'High', 'Medium', 'Low']}
        defaultValue={risk}
        onChange={(e) => setRisk(e)} />
      <CheckboxList
        title='WATCH LIST'
        plainOptions={['All', 'Sanctions', 'Fitness & probity', 'Warnings']}
        defaultValue={watchList}
        onChange={(e) => setWatchList(e)} />
      <CheckboxList
        title='PEP CLASS'
        plainOptions={['All', 'Class 1', 'Class 2', 'Class 3']}
        defaultValue={pepClass}
        onChange={(e) => setPepClass(e)} />

      <div className='sidebar__container'>
        <Button onClick={clearAll}>Clear Filters<span className='sidebar__delete'>&#10005;</span> </Button>
      </div>
    </div>
  )
}

export default Sidebar;
