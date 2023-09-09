import React from 'react';
import { clx } from './../utils';

import './index.css';

const Button: React.FC<{
  children?: React.ReactNode;
  onClick?(): void;
  className?: string;
  shape?: 'rounded' | 'circular';
  appearance?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
}> = ({
  children,
  onClick,
  className,
  shape = 'rounded',
  appearance = 'default',
  size = 'medium',
}) => {
  // tailwind 标记
  const btnAppearance = `btn-type-${appearance}` as
    | 'btn-type-default'
    | 'btn-type-contained'
    | 'btn-type-outlined'
    | 'btn-type-text';

  const minWidth = `min-w-${size}` as
    | 'min-w-small'
    | 'min-w-medium'
    | 'min-w-large';

  return (
    <button
      className={clx('btn', shape, btnAppearance, size, minWidth, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
