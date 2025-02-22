import { ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

const List = <T,>({ items, renderItem }: ListProps<T>) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{renderItem(item)}</li>
    ))}
  </ul>
);

// Usage:
const UserList = () => {
  const users = [{ name: "Alice" }, { name: "Bob" }];
  return <List items={users} renderItem={(user) => <span>{user.name}</span>} />;
};
