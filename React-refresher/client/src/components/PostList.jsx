import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(newpost) {
    setPosts((posts) => [newpost, ...posts]);
  }

  return (
    <>
      {/* {modalContent} */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onBodyChange={bodyChangedHandler}
            // onAuthorChange={AuthorChangedHandler}
            onCancel={onStopPosting}
            onCreatePost={addPostHandler}
          ></NewPost>
        </Modal>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: 'center' }}>
          <h1>There are no posts yet</h1>
          <p>start by adding one!</p>
        </div>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body}></Post>
          ))}
        </ul>
      )}
    </>
  );
}
export default PostList;
