import { FiberManualRecord } from '@mui/icons-material';
import React from 'react';
import './NavbarIcon.css';

const NavbarIcon = ({ Icon }) => {
  return (
    <div className='navbarIcon d-flex'>
      <Icon className='mainIcon' />
      <FiberManualRecord className='text-danger notificationIcon' />
    </div>
  );
};

export default NavbarIcon;
