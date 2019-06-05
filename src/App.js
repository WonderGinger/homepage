import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Item from './components/Item';
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

const items = [
  {
    icon: 'https://cdn2.iconfinder.com/data/icons/minimalism/128/twitter.png',
    href: 'https://www.twitter.com',
  },
  {
    icon: 'https://www.tokbox.com/blog/wp-content/uploads/2016/04/Facebook_logo_36x36.svg_.png',
    href: 'https://facebook.com',
  },
  {
    icon: "https://www.androidpolice.com/wp-content/uploads/2016/10/nexus2cee_ic_launcher-1.png",
    href: "https://messages.android.com/",
  },
  {
    icon: 'http://icons.iconarchive.com/icons/dakirby309/simply-styled/128/YouTube-icon.png',
    href: 'https://www.youtube.com/feed/subscriptions',
  },
  {
    icon: 'http://www.iconninja.com/files/830/856/929/logo-brand-social-network-twitch-icon.png',
    href: 'https://www.twitch.tv/',
  },
  {
    icon: 'http://icons.iconarchive.com/icons/uiconstock/socialmedia/128/Reddit-icon.png',
    href: 'https://www.reddit.com/',
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gmail_Icon.svg/512px-Gmail_Icon.svg.png',
    href: 'https://mail.google.com',
  },
  {
    icon: 'http://icons.iconarchive.com/icons/marcus-roberto/google-play/128/Google-Drive-icon.png',
    href: 'https://drive.google.com',
  },
];

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.gutter}/>
      <Container fixed>
        <Grid container alignItems="flex-end" justify="flex-start" spacing={2}>
          {
            items.map((item) => {
              return (
                <Grid key={item.href} item xs={12} sm={6} md={4} lg={3}>
                  <Item icon={item.icon} href={item.href}/>
                </Grid>
              );
            })
          }
        </Grid>
      </Container>
    </div>
  ); 
}

export default App;
