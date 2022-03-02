import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from '../categories/Category';
import Navbar from './navbar';

const Pages = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      {/* <Route exact path="/" element={<Books />} /> */}
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default Pages;
