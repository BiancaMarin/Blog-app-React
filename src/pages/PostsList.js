import React from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Grid, Container } from '@mui/material';

function PostsList() {
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
    <Container maxWidth="l" sx={{ marginTop: 3 }}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} md={6} lg={4}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PostsList;
