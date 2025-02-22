import { type ElementType, type ReactNode } from "react";

type ContainerProps = {
  as: ElementType;
  children: ReactNode;
};

export default function Container({ as, children }: ContainerProps) {
  const Component = as;
  return <Component>{children}</Component>;
}
