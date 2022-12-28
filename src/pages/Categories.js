import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Container, Grid } from '@mui/material';
import PostCard from '../components/PostCard';
import { CategoryContext } from '../components/Context/CategoryContext';

function SearchByCategories() {
  const { active } = useContext(CategoryContext);

  console.log(active);
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'posts');

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((item) => ({ ...item.data(), id: item.id })));
      // console.log(data);
    }
    getPosts();
  }, []);

  return (
    <Container maxWidth="l">
      <Grid container spacing={3}>
        {posts
          .filter((post) => post.category === active)
          .map((post) => (
            <Grid item key={post.id} xs={12} md={6} lg={4}>
              <PostCard post={post} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default SearchByCategories;
