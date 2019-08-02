import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const Content = withStyles({
  root: {
    width: '1000px',
    maxWidth: '1000px',
    height: '500px',
    maxHeight: '500px',
    overflowY: 'auto',
  },
})(Paper);

export default Content;
