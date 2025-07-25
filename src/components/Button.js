import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button 
      style={{ 
        backgroundColor: 'orange', 
        color: 'white', 
        padding: '10px 20px', 
        border: 'none', 
        borderRadius: '5px',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;