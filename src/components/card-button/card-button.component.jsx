import "./card-button.styles.scss";

const CardButton = ({ isInverted, children, ...props }) => (
  <button className={`card-button ${isInverted ? "inverted" : ""}`} {...props}>
    {children}
  </button>
);

export default CardButton;
