import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  type?: "button" | "submit"
  onClick?: () => void
}

const Button = ({ children, onClick, color = "primary", type = 'button' }: Props) => {
  return (
    <button type={type} className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button
