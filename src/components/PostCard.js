import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { styled } from '@mui/material';

const StyleAvatar = styled(Avatar)(() => ({
  backgroundColor: '#37E2D5',
}));

function PostCard({ post }) {
  return (
    <div>
      <Card>
        <CardHeader
          avatar={<StyleAvatar>{post.category[0].toUpperCase()}</StyleAvatar>}
          action={
            <IconButton>
              <DeleteOutline />
            </IconButton>
          }
          title={post.title}
          subheader={post.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostCard;
