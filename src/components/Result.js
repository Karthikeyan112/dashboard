import React from 'react';
import './Result.scss';
import Card from './Card';
import { Button } from 'antd';
import { CaretDownOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';

const Result = () => {
  return (
    <div className='result'>
      <div className='result__container'>
        <h3>Results</h3>
        <div className='result__btns'>
          <div className='result__export'>
            <Button><VerticalAlignBottomOutlined />Export CSV</Button>
            <Button className='export__caret'><CaretDownOutlined /></Button>
          </div>
          <div className='result__export primary__btn'>
            <Button>Create New Monitor</Button>
          </div>
        </div>
      </div>
      <div className='result__cards'>
        <Card items={[{ type: 'Monitors', count: 134 }]} />
        <Card items={[{ type: 'New Matches', count: 6, shouldAddClass: true }, { type: 'WatchList Additions', count: 12, shouldAddClass: true }]} />
        <Card items={[{ type: 'Transfers', count: 23, shouldAddClass: true }]} />
        <Card items={[{ type: 'New Assignments', count: 2, shouldAddClass: true }]} />
      </div>
    </div>
  )
}

export default Result;
