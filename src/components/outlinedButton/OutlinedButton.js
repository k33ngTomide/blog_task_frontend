import React from 'react';
import PropTypes from 'prop-types';

const OutlinedButton = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-transparent text-blue-500 font-bold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

OutlinedButton.defaultProps = {
  className: '',
};

export default OutlinedButton;
