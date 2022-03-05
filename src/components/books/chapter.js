// import { Button } from '@mui/material';
import { populateChapter } from '../../hardCodedData';

const Chapter = () => (
  <div className="cur-chap flex">
    <p className="opacity">current chapter</p>
    <h2 className="ff-2 opacity-2">
      {`${' '} chapter: ${populateChapter()}`}
    </h2>
    <button type="button">Update Chapter</button>
  </div>
);

export default Chapter;
