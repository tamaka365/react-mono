import React from 'react';
declare const Button: React.FC<{
    children?: React.ReactNode;
    onClick?(): void;
    shape?: 'rounded' | 'circular' | 'square';
}>;
export default Button;
