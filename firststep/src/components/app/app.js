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
        {postId: 1, label: 'Going to learn React', important: true},
        {postId: 2, label: 'That is so good', important: false},
        {postId: 3, label: 'I need a break', important: false},
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

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

    this.setState(({data}) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <div className='app'>
        <AppHeader/>
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList posts={this.state.data}
          onDelete={this.deleteItem}/>
        <PostAddForm
          onAdd={this.addItem}/>
      </div>
    );
  };
};
