import React from 'react';

import './App.css';
import AccountSection from './components/AccountSection/AccountSection';
import Ads from './components/Ads/Ads';
import Feed from './components/Feed/Feed';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='App__body  d-flex justify-content-between row d-grid g-4'>
        <div className='col-2 '>
          <AccountSection />
        </div>
        <div className='col-6 '>
          <Feed />
        </div>
        <div className='col-3 '>
          <Ads />
        </div>
      </div>
    </div>
  );
}

export default App;
