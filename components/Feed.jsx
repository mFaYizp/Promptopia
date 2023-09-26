"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { data } from "autoprefixer";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };
    console.log(posts);
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {};
  return (
    <section className="feed">
      <form>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleDataClick={() => {}} />
    </section>
  );
};

export default Feed;
