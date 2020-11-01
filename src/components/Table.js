import React from 'react';
import moment from 'moment'
import { Table, Space, Switch } from 'antd';
import {filterOptions} from '../utils';

const TableComponent = ({ data, changeStatus }) => {
  const columns = [
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      ellipsis: true,
      render: (created) => moment(created).format("DD MMM YYYY")
    },
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
      render: (status, record) => <Switch checked={status} onChange={() => changeStatus(record)} />
    },
  ];
  return (
    <Space style={{ marginTop: 16 }} className='table'>
      <Table pagination={{ position: ['bottomCenter'] }} columns={columns} dataSource={data} />
    </Space>
  )
}

export default TableComponent;
