
interface ButtonProps {
    children: string;
    color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link" | "white" | "black" | "transparent" | "transparent-white" | "transparent-black";
    onClick: () => void;
}

function Button({ children, color, onClick }: ButtonProps) {
  return(
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button;