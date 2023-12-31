'use client';

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt.id}
          post={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`/api/prompt`);
  //     const data = await response.json();
  //     setPosts(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Buscar por TAG"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* <PromptCardList data={posts} handleTagClick={() => {}} /> */}
    </section>
  );
};

export default Feed;
