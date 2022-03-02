import { useSelector } from 'react-redux';
import { populateProgress } from '../../hardCodedData';
import BookInfo from './bookInfo';
import Chapter from './chapter';
import BookProgress from './progress';

const BookCard = () => {
  const totalBooks = useSelector((state) => state.booksReducer);
  return (
    <div>
      {totalBooks.map((book) => (
        <div key={book.id} className="card">
          <BookInfo book={book} />
          <BookProgress progress={populateProgress()} />
          <Chapter />
        </div>
      ))}
    </div>
  );
};

export default BookCard;
