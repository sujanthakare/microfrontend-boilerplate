import React from 'react';

interface IProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<IProps> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
