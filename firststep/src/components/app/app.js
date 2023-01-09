import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

// eslint-disable-next-line require-jsdoc
export default class App extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {postId: 1, label: 'Going to learn React',
          important: true, like: false},
        {postId: 2, label: 'That is so good',
          important: false, like: false},
        {postId: 3, label: 'I need a break',
          important: false, like: false},
      ],
      term: '',
      filter: 'all',
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  // eslint-disable-next-line require-jsdoc
  deleteItem(postId) {
    this.setState(({data}) => {
      const index = data.findIndex((item) => item.postId === postId);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  }

  // eslint-disable-next-line require-jsdoc
  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      like: false,
      postId: this.maxId++,
    };
    this.setState(({data}) => {
      return {
        data: [...data, newItem],
      };
    });
  }

  // eslint-disable-next-line require-jsdoc
  onToggleImportant(postId) {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.postId === postId);

      const old = data[index];
      const newItem = {...old, important: !old.important};

      const newArr = [...data.slice(0, index),
        newItem, ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  }

  // eslint-disable-next-line require-jsdoc
  onToggleLiked(postId) {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.postId === postId);

      const old = data[index];
      const newItem = {...old, like: !old.like};

      const newArr = [...data.slice(0, index),
        newItem, ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  }

  // eslint-disable-next-line require-jsdoc
  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  }

  // eslint-disable-next-line require-jsdoc
  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter((item) => {
        return item.like;
      });
    } else {
      return items;
    }
  }

  // eslint-disable-next-line require-jsdoc
  onUpdateSearch(term) {
    this.setState({term});
  }

  // eslint-disable-next-line require-jsdoc
  onFilterSelect(filter) {
    this.setState({filter});
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {data, term, filter} = this.state;
    const likedPostsCount = data.filter((item) => item.like).length;
    const postsCount = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className='app'>
        <AppHeader
          likedPostsCount={likedPostsCount}
          postsCount={postsCount}/>
        <div className='search-panel d-flex'>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}/>
        <PostAddForm
          onAdd={this.addItem}/>
      </div>
    );
  }
}
