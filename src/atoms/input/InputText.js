import React from 'react';
import './Input.css';

const InputText = props => {
  return <input 
    type="text" 
    className="input-text"
    name={props.name}
    id={props.id}
    onChange={props.onChange}
    onKeyUp={props.onKeyPress}
    style={{
      flexGrow: props.flexGrow
    }}
  />
}

export default InputText;