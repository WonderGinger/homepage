import React from 'react';
import ItemContainer from './components/ItemContainer';
import blueGrey from '@material-ui/core/colors/blueGrey';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    // The .body background is in index.css
    backgroundColor: blueGrey[900],
    height: '100vh',
  },
  gutter: {
    height: '15vh',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.gutter}/>
      <ItemContainer/>
    </div>
  ); 
}

export default App;
