import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProgress } from '../../hardCodedData';
import { getBookAsync } from '../../redux/books/books';
import BookInfo from './bookInfo';
import Chapter from './chapter';
import BookProgress from './progress';

const BookCard = () => {
  const dispatch = useDispatch();
  const totalBooks = useSelector((state) => state.booksReducer);
  useEffect(() => {
    dispatch(getBookAsync());
  }, []);

  return (
    <div>
      {totalBooks.map((book) => (
        <div key={book.item_id} className="card">
          <BookInfo book={book} />
          <BookProgress progress={populateProgress()} />
          <Chapter />
        </div>
      ))}
    </div>
  );
};

BookInfo.propTypes = {
  'book.item_id': PropTypes.string,
};

export default BookCard;
