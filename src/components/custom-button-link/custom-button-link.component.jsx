import "./custom-button-link.styles.scss";

const CustomButton = ({ children, destName, ...props }) => (
  <a href={`#${destName}`} className="btn" {...props}>
    {children}
  </a>
);

export default CustomButton;
