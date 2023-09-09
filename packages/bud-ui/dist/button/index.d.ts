import React from 'react';
import './index.css';
declare const Button: React.FC<{
    children?: React.ReactNode;
    onClick?(): void;
    className?: string;
    shape?: 'rounded' | 'circular';
    appearance?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
}>;
export default Button;
