import React from 'react';
import PropTypes from 'prop-types';

const PostAddForm = ({onAdd}) => {
  return (
    <div className='bottom-panel d-flex'>
      <input
        type='text'
        placeholder='О чём Вы думаете сейчас?'
        className='form-control new-post-label'
      />
      <button
        type='submit'
        className='btn btn-outline-secondary'
        onClick={() => onAdd('Hello')}>
        Добавить</button>
    </div>
  );
};

PostAddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default PostAddForm;
