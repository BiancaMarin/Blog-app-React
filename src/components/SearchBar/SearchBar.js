import React, { useContext } from 'react';
import styles from './SearchBar.module.css';
import { PostsContext } from '../Context/PostsContext';

function SearchBar() {
  const { searchPost, setSearchPost } = useContext(PostsContext);
  console.log(searchPost);

  const handleSearchPost = (e) => {
    setSearchPost(e.target.value);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className={styles['input']}
          onChange={handleSearchPost}
        />
      </form>
    </div>
  );
}

export default SearchBar;
