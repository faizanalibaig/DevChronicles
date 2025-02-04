import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Main from '../components/Dashboard/Main';
import Layout from '../layouts/Layout';
import Post from '../components/Blog/Post';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='article?/:slug' element={<Post />} />
        <Route path='dashboard' element={<Main />} />
      </Route>
    </Routes>
  );
};

export default Router;
