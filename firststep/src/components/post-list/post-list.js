import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
  const elements = posts.map((item) => {
    const {postId, ...itemProps} = item;
    return (
      <li className='list-group-item' key={postId}>
        <PostListItem {...itemProps} onDelete={() => onDelete(postId)}
          onToggleImportant={() => onToggleImportant(postId)}
          onToggleLiked={() => onToggleLiked(postId)}/>
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
  onDelete: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleLiked: PropTypes.func.isRequired,
};

export default PostList;
