type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean; // Optional prop
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);
