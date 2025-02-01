import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Main from '../components/Dashboard/Main';
import Layout from '../layouts/Layout';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='dashboard' element={<Main />} />
      </Route>
    </Routes>
  );
};

export default Router;
