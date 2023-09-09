import React from 'react';
import { clx } from './../utils';
import './index.css';
const Button = ({ children, onClick, className, shape = 'rounded', appearance = 'default', size = 'medium', }) => {
    // tailwind 标记
    const btnAppearance = `btn-type-${appearance}`;
    const minWidth = `min-w-${size}`;
    return (<button className={clx('btn', shape, btnAppearance, size, minWidth, className)} onClick={onClick}>
      {children}
    </button>);
};
export default Button;
