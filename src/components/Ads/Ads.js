import {
  Campaign,
  Close,
  Contacts,
  ExitToApp,
  GifBoxTwoTone,
  MoreHoriz,
  Notifications,
  Redeem,
  Search,
  Videocam,
  VideoCameraBack,
} from '@mui/icons-material';
import { Alert, Avatar } from '@mui/material';
import React from 'react';
import './Ads.css';
import Contact from './Contact';

const Ads = () => {
  return (
    <div className='ads overflow-scroll  '>
      <div className='birthday border border-top-0 border-end-0 border-start-0 pb-3'>
        <div className='bg-white p-3 container-fluid rounded-3'>
          <div>
            <div className='header d-flex justify-content-between'>
              <div className='headerLeft d-flex'>
                <Redeem className='text-primary me-2' />
                <p>Birthdays</p>
              </div>
              <div className='headerLeft'>
                <Close />
              </div>
            </div>
            <p>
              <span className='fw-bold'>Laura London's</span> birthday is today.
            </p>
          </div>
        </div>
      </div>
      <div className='pages py-3 border border-top-0 border-end-0 border-start-0 pb-3'>
        <div className='header d-flex justify-content-between'>
          <h4 className='text-secondary'>Your Pages</h4>
          <MoreHoriz />
        </div>
        <div className='middle d-flex align-items-center mt-2'>
          <Avatar />
          <h5 className='mt-2 ms-3'>Facebook Business Page</h5>
        </div>
        <div className='bottom mt-3 ps-4'>
          <div className='list'>
            <div className='listItem d-flex text-secondary'>
              <Notifications />
              <p className=' ms-2'>20+ Notifications</p>
            </div>
            <div className='listItem d-flex text-secondary'>
              <Campaign />
              <p className=' ms-2'>Create promotion</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Contacts py-3 '>
        <div className='header d-flex justify-content-between'>
          <div className='headerLeft'>
            <h4 className='text-secondary'>Contacts</h4>
          </div>
          <div className='headerRight'>
            <div className='options d-flex justify-content-evenly'>
              <VideoCameraBack className='mx-2' />
              <Search className='mx-2' />
              <MoreHoriz className='mx-2' />
            </div>
          </div>
        </div>
        <div className='body'>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Ads;
