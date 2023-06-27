import React from 'react';

const Label = ({ children, id }) => {
  return (
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900">
      {children}
    </label>
  );
};

export default Label;
