import React from 'react';

const commonVariant = `font-bold tracking-tight tracking-tight`;
const variants = {
  h1: `text-4xl font-bold sm:text-3xl md:text-5xl md:text-6xl ${commonVariant}`,
  h2: `text-3xl font-bold sm:text-5xl ${commonVariant}`,
  h3: `text-2xl font-bold sm:text-4xl ${commonVariant}`,
  small: `text-xl fon-semibold ${commonVariant}`,
};

const colors = {
  primary: 'text-gray-900',
  secondary: 'text-gray-800',
  accent: 'text-gray-700',
};

const Heading = (props) => {
  const {
    children,
    className,
    variant = 'h1',
    color = 'primary',
    ...rest
  } = props;

  const headingVariant = variants[variant];
  const headingColor = colors[color];
  return (
    <h1 className={`${className} ${headingVariant} ${headingColor}`} {...rest}>
      {children}
    </h1>
  );
};

export default Heading;
