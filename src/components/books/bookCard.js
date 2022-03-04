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
    <ul className="bookList">
      <div className="card">
        {totalBooks.map((book) => (
          <li key={book.item_id} className="card-items w100 flex">
            <div className="bkInfo-progress">
              <BookInfo book={book} />
              <BookProgress progress={populateProgress()} />
            </div>
            <div className="line-2" />
            <Chapter />
          </li>
        ))}
      </div>
    </ul>
  );
};

BookInfo.propTypes = {
  'book.item_id': PropTypes.string,
};

export default BookCard;
