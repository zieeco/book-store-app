import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBookAsync } from '../../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Category');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: Date.now(),
      title,
      category,
    };

    if (title !== '' && category !== 'Category') {
      dispatch(addNewBookAsync(newBook));
      setTitle('');
      setCategory('Category');
    }
  };

  return (
    <section className="form-sect">
      <h3>ADD NEW BOOK</h3>
      <form className="book-form">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          name="category"
          id=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option defaultValue="Category">Category</option>
          <option value="Action">Action</option>
          <option value="Movies">Movies</option>
          <option value="Music">Music</option>
          <option value="Economy">Economy</option>
          <option value="Finance">Finance</option>
          <option value="Love & Romance">Love & Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Programming">Programming</option>
        </select>

        <Button
          type="button"
          variant="contained"
          className="btn submit"
          onClick={submitBookToStore}
        >
          ADD BOOk
        </Button>
      </form>
    </section>
  );
};

export default Form;
