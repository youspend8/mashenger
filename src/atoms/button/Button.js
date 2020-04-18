import React from 'react';
import './Button.css';

const Button = props => {
  const { id, onClick, title } = props;

  return <button
    type="button"
    className="button"
    id={id}
    onClick={onClick}
    style={{
      flexGrow: props.flexGrow
    }}
  >
    {title}
  </button>
}

export default Button;