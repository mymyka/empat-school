import React from "react";

type CardProps = {
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className=" border rounded-3xl p-5 border-neutral-700">{children}</div>;
};
