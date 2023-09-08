import React from 'react';

const Menu: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <div>{children}</div>;
};

export default Menu;
