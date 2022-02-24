import React from 'react';
import './Feed.css';
import Post from './Post';
import StoryLine from './StoryLine';

const Feed = () => {
  return (
    <div className=' feed mx-3 '>
      <div className='feed__storyLine '>
        <StoryLine />
      </div>
      <div className='post mt-3 mx-2  rounded-3 '>
        <Post />
      </div>
      <div className='post mt-3 mx-2  rounded-3 '>
        <Post />
      </div>
      <div className='post mt-3 mx-2  rounded-3 '>
        <Post />
      </div>
      <div className='post mt-3 mx-2  rounded-3 '>
        <Post />
      </div>
      <div className='post mt-3 mx-2  rounded-3 '>
        <Post />
      </div>
      <div className='post mt-3 mx-2  rounded-3 '>
        <Post />
      </div>
    </div>
  );
};

export default Feed;
