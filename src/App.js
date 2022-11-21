import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from './pages/AddPost';
import { ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import PostsList from './pages/PostsList';
import SearchByCategories from './components/SearchByCategories';
import { CategoryContextProvider } from './components/Context/CategoryContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9900F0',
      dark: '#4700D8',
    },
    secondary: {
      main: '#F900BF',
      light: '#FF85B3',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    // fontWeightMedium: 600,
    // fontWeightBold: 700,
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
              <Route path="/category" element={<SearchByCategories />} />
            </Routes>
          </Layout>
        </CategoryContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
