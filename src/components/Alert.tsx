interface AlertProps {
    children: string;
    color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    onClose: () => void;
}

export default function Alert({ children, color, onClose }: AlertProps) {
    return( 
        <div className={"alert alert-dismissible alert-" + color + " fade show"} role="alert">
            {children}
            <button type="button" className="btn-close" onClick={onClose} title="Close alert" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}
