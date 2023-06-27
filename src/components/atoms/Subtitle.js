import React from 'react';

const variants = {
  p: 'text-lg leading-8',
  h6: 'text-lg leading-8 ',
};

const colors = {
  secondary: 'text-gray-600',
  light: 'text-gray-400',
};

const Subtitle = (props) => {
  const {
    children,
    className,
    variant = 'p',
    color = 'secondary',
    ...rest
  } = props;

  const subHeadingVariant = variants[variant];
  const subHeadingColor = colors[color];
  return (
    <p
      className={`${className} ${subHeadingVariant} ${subHeadingColor}`}
      {...rest}>
      {children}
    </p>
  );
};

export default Subtitle;
