import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);
