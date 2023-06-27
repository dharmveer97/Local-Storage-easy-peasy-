import React from 'react';
import Link from 'next/link';

const commonVariant = `transition ease-in-out delay-150 hover:-translate-y-1
hover:scale-10 duration-300 relative flex items-center justify-center
border border-transparent font-medium`;

const variants = {
  primary: `px-4 py-2 bg-brand hover:bg-gray-900 text-sm hover:text-gray-100 text-white rounded-md ${commonVariant}`,
  secondary: `px-4 py-2 bg-brand hover:bg-gray-900 text-sm hover:text-gray-100 text-white rounded-md ${commonVariant}`,
  tertiary: `bg-brand hover:text-gray-100 hover:bg-gray-900 text-white font-bold cursor-pointer py-4 px-14 rounded-full uppercase transition-all duration-400 inline-flex justify-center items-center leading-none ${commonVariant}`,
};

const Button = (props) => {
  const {
    children,
    className,
    variant = 'primary',
    href,
    loading,
    ...rest
  } = props;
  const buttonVariant = variants[variant];
  const buttonProps = {
    className: `${className} ${buttonVariant} ${
      loading
        ? 'opacity-50 disabled:cursor-not-allowed  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-brand'
        : ''
    }`,
    ...rest,
  };

  return href ? (
    <Link href={href} {...buttonProps}>
      {children}
    </Link>
  ) : (
    <button disabled={loading} type="button" {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
