import React from 'react';
import Sidebar from './Sidebar';
import Result from './Result';
import './Body.scss';

const Body = () => {
  return (
    <div className='body'>
      <Sidebar />
      <Result />
    </div>
  )
}

export default Body;
