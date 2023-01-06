import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({likedPostsCount, postsCount}) => {
  return (
    <div className='app-header d-flex'>
      <h1>Timur Hamidov</h1>
      <h2>{postsCount} записей, из них понравилось {likedPostsCount}</h2>
    </div>
  );
};

AppHeader.propTypes = {
  likedPostsCount: PropTypes.number.isRequired,
  postsCount: PropTypes.number.isRequired,
};

export default AppHeader;
