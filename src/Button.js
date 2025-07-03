import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`my-btn ${className}`}>
      {label}
    </button>
  );
};

export default Button;
