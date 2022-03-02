import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const BookProgress = ({ progress }) => (
  <div>
    <span className="span-1">
      <CircularProgress
        color="inherit"
        size={50}
        thickness={2}
        className="cl-blue"
        variant="determinate"
        value={progress}
      />

      <div className="percent">
        <h3>
          {`${progress}%`}
        </h3>
        <p>completed</p>
      </div>
    </span>
  </div>
);

BookProgress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default BookProgress;
