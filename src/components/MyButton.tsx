import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const MyButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
