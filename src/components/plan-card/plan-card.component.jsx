import "./plan-card.styles.scss";
import CardButton from "../card-button/card-button.component";

const PlanCard = ({ plan: { title, price, available, isInverted } }) => {
  return (
    <div className={`plan-card ${isInverted ? "inverted-card" : ""}`}>
      <div className="plan-card-title">{title}</div>
      <span className="plan-card-price">{price}</span>
      <span className="plan-card-desctiption">
        Available:
        {available.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </span>
      <div className="button-container">
        <CardButton isInverted={isInverted}>Select</CardButton>
      </div>
    </div>
  );
};

export default PlanCard;
