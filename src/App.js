import React from 'react';
import './App.css';
import Header from './Header';
import emojiList from './emojiList.json';
import PostList from './emojis';


function App() {
  return (
    <div className="App">
      <Header />
      <PostList emojiList={emojiList} />
    </div>
  );
}

export default App;
