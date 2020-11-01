import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Result from './Result';
import Table from './Table';
import './Body.scss';

import { filterData, filterByPepClass, filterByMatching } from '../utils';

const Body = () => {
  const defaultValue = ['All'];
  const [country, setCountry] = useState(defaultValue)
  const [risk, setRisk] = useState(defaultValue)
  const [watchList, setWatchList] = useState(defaultValue)
  const [pepClass, setPepClass] = useState(defaultValue)
  const [matching, setMatching] = useState(70)

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

  const onCountryChange = (e) => {
    setCountry(e);
    console.log(matching)
    const filteredByCountry = filterData(data, e, 'country');
    const filteredByRiskLevel = filterData(filteredByCountry, risk, 'riskLevel');
    const filteredByPepClass = filterByPepClass(filteredByRiskLevel, pepClass, 'pepClass');
    setFilteredData(filterByMatching(filteredByPepClass, matching));
  };
  const onRiskChange = (e) => {
    setRisk(e);
    const filteredByCountry = filterData(data, country, 'country');
    const filteredByRiskLevel = filterData(filteredByCountry, e, 'riskLevel');
    const filteredByPepClass = filterByPepClass(filteredByRiskLevel, pepClass, 'pepClass');
    setFilteredData(filterByMatching(filteredByPepClass, matching));
  };
  const onWatchListChange = (e) => {
    setWatchList(e);
  };
  const onPepClassChange = (e) => {
    setPepClass(e);
    const filteredByCountry = filterData(data, country, 'country');
    const filteredByRiskLevel = filterData(filteredByCountry, risk, 'riskLevel');
    const filteredByPepClass = filterByPepClass(filteredByRiskLevel, e, 'pepClass');
    setFilteredData(filterByMatching(filteredByPepClass, matching));
  };
  const onMatchingChange = (e) => {
    setMatching(e);
    const filteredByCountry = filterData(data, country, 'country');
    const filteredByRiskLevel = filterData(filteredByCountry, risk, 'riskLevel');
    const filteredByPepClass = filterByPepClass(filteredByRiskLevel, pepClass, 'pepClass');
    setFilteredData(filterByMatching(filteredByPepClass, e));
  };


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
        fields={{ country, risk, watchList, pepClass, matching }}
        setters={{ onCountryChange, onRiskChange, onWatchListChange, onPepClassChange, onMatchingChange }}
      />
      <div className='body__content'>
        <Result />
        <Table data={filteredData} changeStatus={changeStatus} />
      </div>
    </div>
  )
}

export default Body;
