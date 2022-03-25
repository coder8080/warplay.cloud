import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectAvailableOptions } from "../../redux/options/options.selectors";
import PlanCard from "../plan-card/plan-card.component";
import "./option-cards.styles.scss";

const OptionCards = ({ availableOptions }) => (
  <div className="option-cards">
    {availableOptions.map((option, i) => (
      <PlanCard key={i} plan={option} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  availableOptions: selectAvailableOptions,
});

export default connect(mapStateToProps)(OptionCards);
