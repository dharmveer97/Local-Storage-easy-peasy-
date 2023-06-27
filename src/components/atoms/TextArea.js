import React from 'react';

const TextArea = ({ className, ...props }) => {
  return (
    <textarea
      className={`border-2 px-3 block w-full rounded-md py-3 pr-10  text-sm md:text-base sm:leading-6 ${className}`}
      {...props}
    />
  );
};

export default TextArea;
