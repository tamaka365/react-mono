import React from 'react';

import classes from './index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

const Button: React.FC<{
  children?: React.ReactNode;
  onClick?(): void;
  shape?: 'rounded' | 'circular' | 'square';
}> = ({ children, onClick, shape = 'rounded' }) => {
  return (
    <button className={cx('button')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
