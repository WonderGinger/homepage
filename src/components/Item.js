import React from 'react';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { makeStyles } from '@material-ui/core';
import '../App.css';

const useStyles = makeStyles(theme => ({
    root: {
        background: grey[800],
        padding: theme.spacing(3, 2),
    },
}));

const Item = props => {
    const href = props.href;
    const icon = props.icon;
    const classes = useStyles();
    return (
        <a href={ href }>
            <Paper className={classes.root}>
                <img className="icon" src={icon} alt={href}/>
            </Paper>
        </a>
    );
}

export default Item;