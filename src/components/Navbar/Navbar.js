import {
  AccountBox,
  Group,
  Home,
  Message,
  Newspaper,
  NotificationImportant,
  OndemandVideo,
  OnDemandVideo,
  Search,
  Storefront,
  VideoCall,
  WidgetsRounded,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './Navbar.css';
import NavbarIcon from './NavbarIcon';

const Navbar = () => {
  return (
    <div className='navbar container-fluid  shadow-sm px-4'>
      <div className='navbar__left d-flex'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/145/145802.png'
          alt='facebookLogo'
          className='navbar__fbLogo'
        />
        <div className='navbar__inputField d-flex align-items-center ps-3'>
          <Search className='navbar__searchIcon' />
          <input type='text' placeholder='Search Facebook' />
        </div>
      </div>
      <div className='navbar__center d-flex'>
        <NavbarIcon Icon={Home} />
        <NavbarIcon Icon={OndemandVideo} />
        <NavbarIcon Icon={Storefront} />
        <NavbarIcon Icon={Group} />
        <NavbarIcon Icon={Newspaper} />
      </div>
      <div className='navbar__right d-flex align-items-center'>
        <Avatar className='avatar' />
        <span className='ms-2 fw-bold'>Darryl </span>
        <div className='ms-3 d-flex justify-content-center align-items-center '>
          <div className='personalIcons d-flex justify-content-center align-items-center'>
            <WidgetsRounded className='icon' />
          </div>
          <div className='personalIcons'>
            <Message className='icon' />
          </div>
          <div className='personalIcons'>
            <NotificationImportant className='icon' />
          </div>
          <div className='personalIcons'>
            <AccountBox className='icon' />
          </div>
        </div>
        {/* Avatar */}
        {/* ICONS */}
      </div>
    </div>
  );
};

export default Navbar;
