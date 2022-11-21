import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

export const PostsContext = createContext();

export function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState('');

  const postsCollectionRef = collection(db, 'posts');

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((item) => ({ ...item.data(), id: item.id })));
      console.log(data);
    }

    getPosts();
  }, []);

  return (
    <PostsContext.Provider
      value={{ posts, setPosts, searchPost, setSearchPost }}
    >
      {children}
    </PostsContext.Provider>
  );
}
