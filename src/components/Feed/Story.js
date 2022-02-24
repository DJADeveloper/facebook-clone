import React from 'react';
import './Story.css';

const Story = ({ image, title }) => {
  return (
    <div className='storyCard rounded-3'>
      <img src={image} alt='avatarImg ' />
      <p >{title}</p>
    </div>
  );
};

export default Story;
