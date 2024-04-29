import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea
          id='body'
          required
          rows={3}
          onChange={props.onBodyChange}
        ></textarea>
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <textarea
          type='text'
          id='body'
          required
          onChange={props.onAuthorChange}
        ></textarea>
      </p>
    </form>
  );
}
export default NewPost;
