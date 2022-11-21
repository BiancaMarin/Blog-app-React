import React, { useContext } from 'react';
import PostCard from '../components/PostCard';
import { Grid, Container } from '@mui/material';
import { PostsContext } from '../components/Context/PostsContext';

function PostsList() {
  const { posts } = useContext(PostsContext);
  const { searchPost } = useContext(PostsContext);

  return (
    <Container maxWidth="l" sx={{ marginTop: 3 }}>
      <Grid container spacing={3}>
        {posts
          .filter((post) => {
            if (searchPost === '') {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchPost.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => (
            <Grid item key={post.id} xs={12} md={6} lg={4}>
              <PostCard post={post} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default PostsList;
