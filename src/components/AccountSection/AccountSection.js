import React from 'react';
import './AccountSection.css';
import PeopleIcon from '@mui/icons-material/People';
import {
  ArrowCircleDown,
  Group,
  Memory,
  Pages,
  Save,
  Storefront,
  Watch,
} from '@mui/icons-material';

const SideNav = ({ Icon, title }) => (
  <div className='sidebarNavItem text-dark'>
    <Icon className='sideIcon' />
    <span className='ms-3 fs-5 '>{title}</span>
  </div>
);
const AccountSection = () => {
  return (
    <div className='accountSection  '>
      <div className='account__header d-flex align-items-center mb-2'>
        <img
          src='https://scontent.fmia1-1.fna.fbcdn.net/v/t1.6435-9/143441481_10225280413175758_6361073595675160579_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TwPNPUuPw38AX8KtQ_S&_nc_ht=scontent.fmia1-1.fna&oh=00_AT8WQTR5eyQTWjGw0olUwHbbwFj1mJgeZzjNoXfmABCwBQ&oe=623A8E4F'
          alt='profilepic'
        />
        <h5 className='ps-2 mt-2'>Darryl J. Adams</h5>
      </div>
      <div className='account__body '>
        <div className='sidebarNavItemList'>
          <SideNav Icon={PeopleIcon} title='Friends' />
          <SideNav Icon={Save} title='Saved' />
          <SideNav Icon={Pages} title='Pages' />
          <SideNav Icon={Group} title='Groups' />
          <SideNav Icon={Storefront} title='Marketplace' />
          <SideNav Icon={Watch} title='Watch' />
          <SideNav Icon={Memory} title='Memories' />
          <SideNav Icon={ArrowCircleDown} title='See more' />
        </div>
      </div>
      <hr />
      <div className='account__footer'>
        <div className='header'>
          <h4>Your shortcuts</h4>
        </div>
        <div className='body'>
          <SideNav Icon={Save} title='Bitcoin' />
          <SideNav Icon={Save} title='Ethereum' />
          <SideNav Icon={Save} title='Cardano' />
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
