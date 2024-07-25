import React from 'react';
import PropTypes from 'prop-types';

const FilledButton = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

FilledButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FilledButton.defaultProps = {
  className: '',
};

export default FilledButton;
