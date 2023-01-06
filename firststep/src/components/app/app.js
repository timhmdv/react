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
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);

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
      postId: this.maxId++,
    };
    console.log(this);
    this.setState(({data}) => {
      return {
        data: [...data, newItem],
      };
    });
  };

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
  };

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
  };

  // eslint-disable-next-line require-jsdoc
  render() {
    const {data} = this.state;
    const likedPostsCount = data.filter((item) => item.like).length;
    const postsCount = data.length;

    return (
      <div className='app'>
        <AppHeader
          likedPostsCount={likedPostsCount}
          postsCount={postsCount}/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList posts={this.state.data}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}/>
        <PostAddForm
          onAdd={this.addItem}/>
      </div>
    );
  };
};
