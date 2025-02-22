type BaseUser = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

type UserCardProps = Omit<BaseUser, "email">; // Removing 'email' from props

const UserCard: React.FC<UserCardProps> = ({ id, name, role }) => (
  <div>
    <h3>{name}</h3>
    <p>Role: {role}</p>
  </div>
);
