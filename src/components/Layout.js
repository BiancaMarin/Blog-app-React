import React, { useContext, useEffect } from 'react';

import { Drawer, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import { useNavigate } from 'react-router-dom';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import WorkIcon from '@mui/icons-material/Work';
import { CategoryContext } from './CategoryContext';
import AppBar from '@mui/material/AppBar';
import { StyleDiv } from '../styles';
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

function Layout({ children }) {
  const navigate = useNavigate();
  const { active, setActive } = useContext(CategoryContext);

  console.log(active);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: '#fff',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
    color: '#000',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  // useEffect(() => {
  //   const handleClickCategory = (category) => {
  //     setActive(category);
  //     navigate('/category');
  //   };
  // }, []);

  function handleClickTravel() {
    setActive('Travel');
    navigate('/category');
  }

  function handleClickBeauty() {
    setActive('Beauty');
    navigate('/category');
  }
  function handleClickCooking() {
    setActive('Cooking');
    navigate('/category');
  }
  function handleClickHealth() {
    setActive('Health');
    navigate('/category');
  }
  function handleClickBussines() {
    setActive('Bussines');
    navigate('/category');
  }

  const arrayItems = [
    {
      text: 'My posts',
      icon: <ViewListRoundedIcon color="primary" />,
      path: '/',
    },
    {
      text: 'Add a post',
      icon: <AddCardRoundedIcon color="primary" />,
      path: '/add',
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        sx={{
          width: 'calc(100% - 240px)',
          backgroundColor: '#F6F6F6',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Toolbar>
          <Search sx={{ backgroundColor: '#fff' }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: '#3F0071' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          variant="h5"
          component="h2"
          color="textSecondary"
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: 2,
            paddingTop: 3,
          }}
        >
          Blog Postes
        </Typography>

        <List sx={{ paddingTop: 2 }}>
          {arrayItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider />
        <Typography
          color="textSecondary"
          sx={{ paddingLeft: 2, paddingTop: 3 }}
        >
          Categories
        </Typography>
        <List>
          <ListItem button onClick={handleClickTravel}>
            <ListItemIcon>
              <TravelExploreIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Travel</ListItemText>
          </ListItem>
          <ListItem button onClick={handleClickBeauty}>
            <ListItemIcon>
              <FaceRetouchingNaturalIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Beauty</ListItemText>
          </ListItem>
          <ListItem button onClick={handleClickCooking}>
            <ListItemIcon>
              <DinnerDiningIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Cooking</ListItemText>
          </ListItem>
          <ListItem button onClick={handleClickHealth}>
            <ListItemIcon>
              <HealthAndSafetyIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Health</ListItemText>
          </ListItem>
          <ListItem button onClick={handleClickBussines}>
            <ListItemIcon>
              <WorkIcon color="primary" />
            </ListItemIcon>
            <ListItemText>Bussines</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div>
        <StyleDiv />
        {children}
      </div>
    </Box>
  );
}

export default Layout;
