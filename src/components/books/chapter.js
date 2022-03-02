import { Button } from '@mui/material';
import { populateChapter } from '../../hardCodedData';

const Chapter = () => (
  <div>
    <p>Current chapter</p>
    <h2>
      {`${' '} chapter: ${populateChapter()}`}
    </h2>
    <Button variant="contained">Update Chapter</Button>
  </div>
);

export default Chapter;
