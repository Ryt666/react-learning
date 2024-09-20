import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://portscaner.ru/Files/Wallpaper/Medium/5fc4f836b358f.jpg' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;