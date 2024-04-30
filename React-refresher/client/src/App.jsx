import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        ></PostList>
      </main>
    </>
  );
}

export default App;
