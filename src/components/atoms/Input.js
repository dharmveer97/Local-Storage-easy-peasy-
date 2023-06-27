import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`border-2 px-3 block w-full rounded-md py-3 pr-10  text-sm md:text-base sm:leading-6 ${className}`}
      {...props}
    />
  );
};

export default Input;
