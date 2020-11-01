import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Result from './Result';
import Table from './Table';
import './Body.scss';
import { SettingFilled } from '@ant-design/icons';

import { filterData, filterByDate, filterByPepClass, filterByMatching } from '../utils';

const Body = () => {
  const defaultValue = ['All'];
  const [country, setCountry] = useState(defaultValue);
  const [risk, setRisk] = useState(defaultValue);
  const [watchList, setWatchList] = useState(defaultValue);
  const [pepClass, setPepClass] = useState(defaultValue);
  const [matching, setMatching] = useState(70);
  const [dateRange, setDateRange] = useState(null)

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`).then(res => res.json())
      .then(res => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    const filteredByCountry = filterData(data, country, 'country');
    const filteredByRiskLevel = filterData(filteredByCountry, risk, 'riskLevel');
    const filteredByPepClass = filterByPepClass(filteredByRiskLevel, pepClass, 'pepClass');
    setFilteredData(filterByDate(filterByMatching(filteredByPepClass, matching), dateRange));
  }, [country, dateRange, risk, pepClass, matching]);

  const changeStatus = (record) => {
    let newData = [...filteredData];
    setFilteredData(newData.reduce((acc, item) => {
      if (record.key === item.key) {
        return [...acc, { ...item, status: !record.status }]
      }
      return [...acc, item]
    }, []));
  }

  return (
    <div className='body'>
      <Sidebar
        fields={{ country, risk, watchList, pepClass, matching, dateRange }}
        setters={{ setCountry, setRisk, setWatchList, setPepClass, setMatching, setDateRange }}
      />
      <div className='body__content'>
        <Result />
        <div className='body__setting'>
          <SettingFilled />
        </div>
        <Table data={filteredData} changeStatus={changeStatus} />
      </div>
    </div>
  )
}

export default Body;
