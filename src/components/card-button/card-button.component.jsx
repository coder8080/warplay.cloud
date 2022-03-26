import { useNavigate } from "react-router-dom";
import "./card-button.styles.scss";

const CardButton = ({ isInverted, children, ...props }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`card-button ${isInverted ? "inverted" : ""}`}
      {...props}
      onClick={() => navigate("/register")}
    >
      {children}
    </button>
  );
};

export default CardButton;
