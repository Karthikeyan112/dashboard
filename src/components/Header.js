import React from 'react';
import './Header.scss';
import { Avatar } from 'antd';
import { UserOutlined, CaretDownFilled } from '@ant-design/icons';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        <a>Monitor Center</a>
        <a>Assesment Center</a>
        <a>Admin</a>
      </div>
      <div className='header__right'>
        <div className='header__name'>
          <span>Nick Name</span>
        </div>
        <div className='header__avatar'>
          <Avatar size={32} style={{ backgroundColor: '#fff', borderRadius: '50%' }} icon={<UserOutlined />} />
          <CaretDownFilled />
        </div>
      </div>
    </header>
  )
}

export default Header;
