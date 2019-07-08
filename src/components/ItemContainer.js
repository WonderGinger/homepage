import React, { Component } from 'react'
import { Grid, Container } from '@material-ui/core/';
import hardtack from 'hardtack';
import Item from './Item';
import BookmarkAddButton from './BookmarkAddButton';
import items from '../bookmarks.json';

export default class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [...items.bookmarks]
    }
  }

  componentDidMount() {
    const items = getBookmarkCookie();
    if (items) {
      this.setState({ items: items });
    }
  }
  
  handleAddBookmark = (href, icon) => {
    if (!validURL(href)) return;
    // if (!validURL(icon)) icon = 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png';
    if(!validURL(icon)) icon = `https://www.google.com/s2/favicons?domain=${href}`;
    const newItems = [...this.state.items, {
      href,
      icon
    }]
    this.setState({
      items: newItems
    });
    setBookmarkCookie(newItems);
  }

  handleDelete = (i) => {
    const newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({
      items: newItems
    })
    setBookmarkCookie(newItems);
  }

  render() {
    return (
      <Container fixed>
        <Grid container alignItems="flex-end" justify="flex-start" spacing={2}>

          {this.state.items.map((item, itemIndex) => (
            <Grid key={itemIndex} item xs={12} sm={6} md={4} lg={3}>
              <Item
                itemIndex={itemIndex}
                icon={item.icon} 
                href={item.href}
                onDelete={() =>this.handleDelete(itemIndex)}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <BookmarkAddButton onClick={(href, icon) => this.handleAddBookmark(href, icon)}/>
          </Grid>

        </Grid>
      </Container>
    )
  }
}

const setBookmarkCookie = items => {
  hardtack.set('bookmarks', items.map(item => JSON.stringify(item)), {
    maxAge: '60*60*25*365'
  });
}

const getBookmarkCookie = () => {
  const items = hardtack.get('bookmarks');
  if (!items) return;
  return items.split(/,(?={)/).map(item => JSON.parse(item))
}

const validURL = str  => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}