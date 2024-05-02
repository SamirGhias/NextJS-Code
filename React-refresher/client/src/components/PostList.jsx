// import { useEffect, useState } from 'react';
import Post from './Post';
import classes from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostList() {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);

  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []);

  // function addPostHandler(newpost) {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(newpost),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   setPosts((posts) => [newpost, ...posts]);
  // }

  return (
    <>
      {posts.length === 0 && (
        <div style={{ textAlign: 'center' }}>
          <h1>There are no posts yet</h1>
          <p>start by adding one!</p>
        </div>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post id={post.id} author={post.author} body={post.body}></Post>
          ))}
        </ul>
      )}

      {/* {isFetching && (
        <div style={{ textAlign: 'center' }}>
          <p>Loading posts...</p>
        </div>
      )} */}
    </>
  );
}
export default PostList;
