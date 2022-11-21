import React from 'react';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Typography,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function AddPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [category, setCategory] = useState('Travel');

  // console.log(category);

  let navigate = useNavigate();

  const postsCollectionRef = collection(db, 'posts');

  async function handleSubmit(e) {
    e.preventDefault();

    setTitleError(false);
    setDescriptionError(false);

    if (title === '') {
      setTitleError(true);
    }
    if (description === '') {
      setDescriptionError(true);
    }

    if (title && description && category) {
      await addDoc(postsCollectionRef, { title, description, category });

      navigate('/');
    }
  }

  return (
    <Container sx={{ width: '100vw' }}>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Post
      </Typography>

      <form noValidate autoComplete="off" action="" onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          required
          sx={{ marginTop: 2, marginBottom: 2, display: 'block' }}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          label="Description"
          fullWidth
          required
          sx={{ marginTop: 2, marginBottom: 2, display: 'block' }}
          multiline
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
          error={descriptionError}
        />
        <FormControl>
          <FormLabel sx={{ marginTop: 2, marginBottom: 2 }}>
            Categories
          </FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="Travel"
              control={<Radio />}
              label="Travel"
            />
            <FormControlLabel
              value="Beauty"
              control={<Radio />}
              label="Beauty"
            />
            <FormControlLabel
              value="Cooking"
              control={<Radio />}
              label="Cooking"
            />
            <FormControlLabel
              value="Health"
              control={<Radio />}
              label="Health"
            />
            <FormControlLabel
              value="Bussines"
              control={<Radio />}
              label="Bussines"
            />
          </RadioGroup>
        </FormControl>
        <div>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<ArrowForwardIosOutlinedIcon />}
            sx={{ marginTop: 2, marginBottom: 2 }}
          >
            Submit post
          </Button>
        </div>
      </form>
    </Container>
  );
}
export default AddPost;
