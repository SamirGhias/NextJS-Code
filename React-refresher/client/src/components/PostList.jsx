import { useEffect, useState } from "react";
import NewPost from "../routes/NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(newpost) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newpost),
      headers: {
        "Content-Type": "application/json",
      },
    });
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

      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <h1>There are no posts yet</h1>
          <p>start by adding one!</p>
        </div>
      )}

      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body}></Post>
          ))}
        </ul>
      )}

      {isFetching && (
        <div style={{ textAlign: "center" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}
export default PostList;
