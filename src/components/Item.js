import React from 'react';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    icon: {
        width: '128px',    
        height: '128px',
        display: 'block',
        margin: 'auto',
    }
}));

let styles = {
    item: {
        background: grey[800],
        onHover: {
            background: grey[700]
        }
    }
}

const Item = ({ href, icon }) => {
    const classes = useStyles();
    const handleMouseEnter = (e) => {
        if(e.target.localName === "img") return;
        e.target.style.background = styles.item.onHover.background;
    }
    const handleMouseLeave = (e) => {
        if(e.target.localName === "img") return;
        e.target.style.background = styles.item.background;
    }
    return (
        <div onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={e => handleMouseLeave(e)}>
            <a href={ href }>
                <Paper style={styles.item} className={classes.root} >
                    <img className={classes.icon} src={icon} alt={href}/>
                </Paper>
            </a>
        </div>
    );
}

export default Item;