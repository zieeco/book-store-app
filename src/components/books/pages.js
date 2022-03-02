import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from '../categories/Category';
import Book from './book';
import Navbar from './navbar';

const Pages = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route exact path="/" element={<Book />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default Pages;
