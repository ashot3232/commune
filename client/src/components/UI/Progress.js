import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
    linear: {
        display: 'block',
        margin: '70px auto',
        width: '80%'
    },
    circle: {
        display: 'block',
        margin: '300px auto',
    }
});

const CircularIndeterminate = (props) => {
    const { classes, circle } = props;
    return circle ? <CircularProgress className={classes.circle} /> : <LinearProgress className={classes.linear} />;
};

export default withStyles(styles)(CircularIndeterminate);
