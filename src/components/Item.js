import React from 'react';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        background: grey[800],
        padding: theme.spacing(3, 2),
    },
    icon: {
        width: '128px',    
        height: '128px',
        display: 'block',
        margin: 'auto',
    }
}));

const Item = props => {
    const href = props.href;
    const icon = props.icon;
    const classes = useStyles();
    return (
        <a href={ href }>
            <Paper className={classes.root}>
                <img className={classes.icon} src={icon} alt={href}/>
            </Paper>
        </a>
    );
}

export default Item;