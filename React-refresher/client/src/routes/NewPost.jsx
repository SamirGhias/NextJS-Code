import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost({ onCancel, onCreatePost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangedHandler(event) {
    setEnteredBody(event.target.value);
  }

  function AuthorChangedHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(event);
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onCreatePost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={bodyChangedHandler}
          ></textarea>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <textarea
            type="text"
            id="name"
            required
            onChange={AuthorChangedHandler}
          ></textarea>
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
export default NewPost;
