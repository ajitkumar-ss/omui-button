import React from 'react';

const Button = ({ label, onClick, type = 'button', className = '' }) => {
  const baseStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={baseStyle}
      className={className}
    >
      {label}
    </button>
  );
};

export default Button;
