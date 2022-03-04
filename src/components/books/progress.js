import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const BookProgress = ({ progress }) => (
  <div className="progress-info flex">
    <div className="span-1 flex">
      {/* <div className="circle-box"> */}
      <div className="left flex">
        <CircularProgress
          color="inherit"
          size={50}
          thickness={2}
          className="cl-blue"
          variant="determinate"
          value={progress}
        />
        {/* </div> */}

        <div className="percent flex">
          <h3>
            {`${progress}%`}
          </h3>
          <p className="opacity">completed</p>
        </div>
      </div>
    </div>
  </div>
);

BookProgress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default BookProgress;
