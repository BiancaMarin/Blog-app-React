import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from './pages/AddPost';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import PostsList from './pages/PostsList';
import Categories from './pages/Categories';
import { CategoryContextProvider } from './components/Context/CategoryContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7900FF',
      dark: '#590696',
    },
    secondary: {
      main: '#37E2D5',
      light: '#72FFFF',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CategoryContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<PostsList />} />
              <Route path="/add" element={<AddPost />} />
              <Route path="/category" element={<Categories />} />
            </Routes>
          </Layout>
        </CategoryContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
