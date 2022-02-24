import {
  EmojiEmotions,
  PhotoAlbum,
  Videocam,
  VideoCameraBack,
} from '@mui/icons-material';
import React from 'react';
import './Post.css';

const Post = () => {
  return (
    <div className='post rounded-3 container-fluid  '>
      <div className='header d-flex '>
        <img
          src='https://scontent.fmia1-1.fna.fbcdn.net/v/t1.6435-9/143441481_10225280413175758_6361073595675160579_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TwPNPUuPw38AX8KtQ_S&_nc_ht=scontent.fmia1-1.fna&oh=00_AT8WQTR5eyQTWjGw0olUwHbbwFj1mJgeZzjNoXfmABCwBQ&oe=623A8E4F'
          alt='userImage'
          className='feed__userPhoto'
        />
        <div className='feed__inputField d-flex align-items-center ps-3 container-fluid'>
          <input
            type='text'
            placeholder={`What's on your mind, Darryl?`}
            className='container-fluid d-flex justify-content-start'
          />
        </div>
      </div>
      <hr />
      <div className='footer d-flex justify-content-between px-5 pt-3'>
        <div className='icon__text d-flex'>
          <VideoCameraBack className='text-danger me-1' />
          <p>Live Video</p>
        </div>
        <div className='icon__text d-flex'>
          <PhotoAlbum className='text-success  me-1' />
          <p>Photo/video</p>
        </div>
        <div className='icon__text d-flex'>
          <EmojiEmotions className='text-warning  me-1' />
          <p>Feeling/activity</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
