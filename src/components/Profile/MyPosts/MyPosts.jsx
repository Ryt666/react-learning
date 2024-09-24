import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postElem = props.postData.map((m) =><Post message={m.message} likeCount={m.likeCount} />)


  return (
    <div className={s.postBlock}>
     <h3>My posts</h3> 
      <div>
        <div>
        <textarea></textarea>
        </div>
        
        <button>Add post</button>

      </div>
      <div className={s.posts}>
     {postElem}
      </div>
    </div>
  )

}

export default MyPosts;