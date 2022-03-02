import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const BookInfo = ({ book }) => (
  <div>
    <h5>{book.category}</h5>
    <h2>{book.title}</h2>
    <Button variant="contained" className="btn primary">Comment</Button>
    <Button variant="contained" className="btn primary">Remove</Button>
    <Button variant="contained" className="btn primary">Edit</Button>
  </div>
);

BookInfo.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      category: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default BookInfo;
