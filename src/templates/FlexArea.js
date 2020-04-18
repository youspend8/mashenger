import React from 'react';
import './FlexArea.css';

const FlexArea = props => {
  return (
    <div className="area-flex">
    {
      props.children
    }
    </div>
  )
}

export default FlexArea;