import React from 'react';
import './Header.scss';
import { Avatar } from 'antd';
import { UserOutlined, CaretDownFilled } from '@ant-design/icons';

const Header = () => {
  const handleClick = (e) => {
    const AllChildren = Array.from(e.currentTarget.children);
    AllChildren.forEach(element => {
      if (e.target.innerText === element.innerText) {
        element.className = 'active';
      } else {
        element.className = '';
      }

    })


  }
  return (
    <header className='header'>
      <ul className='header__left' onClick={handleClick}>
        <li className='active'>Monitor Center</li>
        <li>Assesment Center</li>
        <li>Admin</li>
      </ul>
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
