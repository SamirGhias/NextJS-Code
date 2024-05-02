// import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {
  // const [enteredBody, setEnteredBody] = useState('');
  // const [enteredAuthor, setEnteredAuthor] = useState('');

  // function bodyChangedHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  // function AuthorChangedHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // function submitHandler(event) {
  //   event.preventDefault();
  //   console.log(event);
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor,
  //   };
  // }

  return (
    <Modal>
      <Form
        method='post'
        className={classes.form}
        // onSubmit={submitHandler}
      >
        <p>
          <label htmlFor='body'>Text</label>
          <textarea
            id='body'
            name='body'
            required
            rows={3}
            // onChange={bodyChangedHandler}
          ></textarea>
        </p>
        <p>
          <label htmlFor='name'>Your name</label>
          <textarea
            type='text'
            id='name'
            name='author'
            required
            // onChange={AuthorChangedHandler}
          ></textarea>
        </p>
        <p className={classes.actions}>
          <Link type='button' to='/'>
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}
export default NewPost;
export async function action(data) {
  //could also destructure as ({request})
  const formData = await data.request.formData(); //formData returns promise, so function needs to be async
  // now formData is an object that can call formData.get('body') to obtain fields.
  const postData = Object.fromEntries(formData); // lookds like { body: '...', author:'....' }
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
