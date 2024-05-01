import PostList from "../components/PostList";
import { useState } from "react";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  return (
    <>
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
