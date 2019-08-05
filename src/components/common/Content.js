import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const Content = withStyles({
  root: {
    width: '920px',
    maxWidth: '720px',
    height: '500px',
    maxHeight: '500px',
    overflowY: 'auto',
  },
})(Paper);

export default Content;
