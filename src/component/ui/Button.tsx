// Button.tsx
import { FC } from "react";

// Define the props for the Button component
interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void; // Add onClick prop as an optional function
}

const Button: FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick} // Attach the onClick event
    >
      {title}
    </button>
  );
};

export default Button;
