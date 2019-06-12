import React, { Component } from 'react'
import { Grid, Container } from '@material-ui/core/';
import Item from './Item';

export default class ItemContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        items: [
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
        ]
      }
    }
    render() {
        return (
          <div>      
            <Container fixed>
              <Grid container alignItems="flex-end" justify="flex-start" spacing={2}>
                {this.state.items.map((item, itemIndex) => (
                  <Grid key={itemIndex} item xs={12} sm={6} md={4} lg={3}>
                    <Item
                      itemIndex={itemIndex}
                      icon={item.icon} 
                      href={item.href}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
        )
    }
}
