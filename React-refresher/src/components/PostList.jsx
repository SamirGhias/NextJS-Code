import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostList.module.css';

function PostList(props) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangedHandler(event) {
    setEnteredBody(event.target.value);
  }

  function AuthorChangedHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangedHandler}
        onAuthorChange={AuthorChangedHandler}
      ></NewPost>
      <ul className={classes.posts}>
        <li>
          <Post author={enteredAuthor} body={enteredBody} />
        </li>
        <li>
          <Post author='Zoha' body='React JS is awesome' />
        </li>
      </ul>
    </>
  );
}
export default PostList;
