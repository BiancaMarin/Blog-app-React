import React, { useContext } from 'react';
import { PostsContext } from './Context/PostsContext';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#CDFCF6',
  '&:hover': {
    backgroundColor: '#EEEEEE',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#3C4048',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function SearchBar() {
  const { setSearchPost } = useContext(PostsContext);

  const handleSearchPost = (e) => {
    setSearchPost(e.target.value);
  };

  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: '#63686E' }} />
        </SearchIconWrapper>
        <StyledInputBase
          color="secondary"
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearchPost}
        />
      </Search>
    </div>
  );
}

export default SearchBar;
