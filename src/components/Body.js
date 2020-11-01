import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Result from './Result';
import Table from './Table';
import './Body.scss';

const Body = () => {
  const defaultValue = ['All'];
  const [country, setCountry] = useState(defaultValue)
  const [risk, setRisk] = useState(defaultValue)
  const [watchList, setWatchList] = useState(defaultValue)
  const [pepClass, setPepClass] = useState(defaultValue)
  const [matching, setMatching] = useState(70)

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`).then(res => res.json())
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const changeStatus = (record) => {
    let newData = [...data];
    setData(newData.reduce((acc, item) => {
      console.log(item.key, record.key);
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
        setters={{ setCountry, setRisk, setWatchList, setPepClass, setMatching }}
      />
      <div className='body__content'>
        <Result />
        <Table data={data} changeStatus={changeStatus} />
      </div>
    </div>
  )
}

export default Body;
