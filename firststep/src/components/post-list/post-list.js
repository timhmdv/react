import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {
  const elements = posts.map((item) => {
    const {postId, ...itemProps} = item;
    return (
      <li className='list-group-item' key={postId}>
        <PostListItem {...itemProps}/>
      </li>
    );
  });
  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
