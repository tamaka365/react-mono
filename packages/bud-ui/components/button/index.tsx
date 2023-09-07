import React from 'react';

export const Button: React.FC<{
  children?: React.ReactNode;
  onClick?(): void;
}> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
