import { populateProgress, bookInfo } from '../../hardCodedData';
import BookInfo from './bookInfo';
import Chapter from './chapter';
import BookProgress from './progress';

const BookCard = () => (
  <div>
    {bookInfo.map((book) => (
      <div key={book.id} className="card">
        <BookInfo book={book} />
        <BookProgress progress={populateProgress()} />
        <Chapter />
      </div>
    ))}
  </div>
);

export default BookCard;
