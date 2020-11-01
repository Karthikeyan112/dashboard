import React, { useEffect, useState } from 'react';
import { Table, Space, Switch } from 'antd';

const TableComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`).then(res => res.json())
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const filterOptions = (arr, prop) => {
    return Array.from(new Set(arr.reduce((acc, item) => [...acc, item[prop]], []))).map(item => ({ text: item, value: item }));
  }

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      filters: filterOptions(data, 'type'),
      onFilter: (value, record) => record.type.includes(value),
      sorter: (a, b) => a.type.length - b.type.length,
      ellipsis: true,
    },
    {
      title: 'Risk Level',
      dataIndex: 'riskLevel',
      key: 'riskLevel',
      filters: filterOptions(data, 'riskLevel'),
      onFilter: (value, record) => {
        console.log(record);
        return record.riskLevel.includes(value)
      },
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: filterOptions(data, 'name'),
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      ellipsis: true,
    },
    {
      title: 'Matches',
      dataIndex: 'matches',
      key: 'matches',
      sorter: (a, b) => a.matches - b.matches,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: filterOptions(data, 'country'),
      onFilter: (value, record) => record.country.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      ellipsis: true,
    },
    {
      title: 'PEP Class',
      dataIndex: 'pepClass',
      key: 'pepClass',
      filters: filterOptions(data, 'pepClass'),
      onFilter: (value, record) => record.pepClass.includes(value),
      sorter: (a, b) => a.pepClass.length - b.pepClass.length,
      ellipsis: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ellipsis: true,
      render: (status) => <Switch checked={status} />
    },
  ];
  return (
    <Space style={{ marginTop: 16 }} className='table'>
      <Table pagination={{ position: ['bottomCenter'] }} columns={columns} dataSource={data} />
    </Space>
  )
}

export default TableComponent;
