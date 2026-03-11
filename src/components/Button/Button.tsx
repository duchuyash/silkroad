export const Button = ({ children, action, className }: any) => {
    return (
        <a href={action} className={`btn btn-sm fw-bold ${className || "btn-primary"}`}>
            {children}
        </a>
    );
}
export default Button;

