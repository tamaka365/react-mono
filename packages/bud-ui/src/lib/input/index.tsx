interface InputProps {
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Input;
