import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../../redux/books/books';

const BookInfo = ({ book }) => {
  const dispatch = useDispatch();
  const delBookFromStore = (id) => {
    dispatch(removeBookAsync(id));
  };

  return (
    <div className="bk-info w50">
      <h5 className="opacity">{book.category}</h5>
      <h2 className="ff-2 fs-1 mb-2">{book.title}</h2>
      <div className="btn-container flex w100 mb-1">
        <button type="button" className="btn primary">Comment</button>
        <div className="line-1" />
        <button type="button" className="btn primary" onClick={() => delBookFromStore(book.item_id)}>Remove</button>
        <div className="line-1" />
        <button type="button" className="btn primary">Edit</button>
      </div>
    </div>
  );
};

BookInfo.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      category: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default BookInfo;
