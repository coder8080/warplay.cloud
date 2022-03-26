import "./custom-button.styles.scss";

const CustomButton = ({ children, ...props }) => (
  <button
    {...props}
    className={`btn ${props.className ? props.className : ""}`}
  >
    {children}
  </button>
);

export default CustomButton;
