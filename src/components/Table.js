import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';

const TableComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`).then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const filterOptions = (arr, prop) => {
    return arr.reduce((acc, item) => [...acc, { text: item[prop], value: item[prop] }], [])
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: filterOptions(data, 'name'),
      // filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      // sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      // sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: filterOptions(data, 'address'),
      // filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      // sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      ellipsis: true,
    },
  ];
  return (
    <Space style={{ marginTop: 16 }} className='table'>
      <Table pagination={{ position: ['bottomCenter'] }} columns={columns} dataSource={data} />
    </Space>
  )
}

export default TableComponent;
