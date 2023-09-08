import React from 'react';
import classes from './index.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(classes);
const Button = ({ children, onClick, shape = 'rounded' }) => {
    return (<button className={cx('button')} onClick={onClick}>
      {children}
    </button>);
};
export default Button;
