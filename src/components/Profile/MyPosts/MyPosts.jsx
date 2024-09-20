import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message='hi' likeCount='9'/>
        <Post message='how are you?' likeCount='99' />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )

}

export default MyPosts;