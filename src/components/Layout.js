import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CategoryContext } from './Context/CategoryContext';
import { Drawer, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import WorkIcon from '@mui/icons-material/Work';

import SearchBar from './SearchBar';

const drawerWidth = 240;

function Layout({ children }) {
  const navigate = useNavigate();
  const { setActive } = useContext(CategoryContext);
  const location = useLocation();

  // console.log(active);

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
      <div>{children}</div>
    </Box>
  );
}

export default Layout;
