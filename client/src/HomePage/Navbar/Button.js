import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div className='butt'>
        <button
        className={`${props.color}`}
        type='button'
        >
            {props.text}
        </button>
    </div>
  );
};

export default Button;