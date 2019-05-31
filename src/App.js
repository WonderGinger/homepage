import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Item from './components/Item';
import './App.css';


const items = [
  <Item 
    icon={'https://cdn2.iconfinder.com/data/icons/minimalism/128/twitter.png'} 
    href={'https://www.twitter.com'}
  />,
  <Item
    icon={'https://www.tokbox.com/blog/wp-content/uploads/2016/04/Facebook_logo_36x36.svg_.png'}
    href={'https://facebook.com'}
  />,
  <Item
    icon={"https://www.androidpolice.com/wp-content/uploads/2016/10/nexus2cee_ic_launcher-1.png"}
    href="https://messages.android.com/"
  />,
  <Item
    icon={'http://icons.iconarchive.com/icons/dakirby309/simply-styled/128/YouTube-icon.png'}
    href={'https://www.youtube.com/feed/subscriptions'}
  />,
  <Item
    icon={'http://www.iconninja.com/files/830/856/929/logo-brand-social-network-twitch-icon.png'}
    href={'https://www.twitch.tv/'}
  />,
  <Item
    icon={'http://icons.iconarchive.com/icons/uiconstock/socialmedia/128/Reddit-icon.png'}
    href={'https://www.reddit.com/'}
  />,
]

const renderItems = () => {
  const gridItems = [];
  for (let item of items) {
    if(item.props.icon && item.props.href){
      gridItems.push(
        <Grid item xs={12} sm={6} md={4}>{item}</Grid>
      );
    }
  }
  return gridItems;
}

function App() {
  return (
    <div className="App">
      <Container fixed>
      <Grid container justify="space-evenly" spacing={2}>
        {renderItems()}
      </Grid>
      </Container>
    </div>
  ); 
}

export default App;
