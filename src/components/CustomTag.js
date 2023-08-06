import React from 'react';
import Chip from '@material-ui/core/Chip';

export const CustomTag = ({ label, onDelete }) => {
  const isOperator = ['+', '-', '*', '/'].includes(label);
  
  return (
    <Chip
      label={isOperator ? ` ${label} ` : label}
      onDelete={onDelete}
    />
  );
};
