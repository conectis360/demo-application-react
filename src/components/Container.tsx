import {
  ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type ContainerProps<T extends ElementType> = {
  as: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container({ as, children }: ContainerProps) {
  const Component = as;
  return <Component>{children}</Component>;
}
