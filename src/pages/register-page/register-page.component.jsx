import { Link } from "react-router-dom";

import "./register-page.styles.scss";
import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import RegisterLinks from "../../components/register-links/register-links.components";

const RegisterPage = () => (
  <div className="register-page">
    <div className="register-content">
      <RegisterLinks />
      <CustomInput type="text" placeholder="Email / Phone" />
      <CustomInput type="password" placeholder="Password" />
      <CustomButton className="bottom-button">Register</CustomButton>
      <div className="policy-container">
        <div className="checkbox-container">
          <input type="checkbox" className="checkbox-input" />
          <i className="fa-solid fa-check"></i>
        </div>
        <span>
          I agree with all standart personal data policy stuff, which I can't
          find on this site.
        </span>
      </div>
      <div className="login-options">
        <span className="login-options-title">
          <div className="span-line"></div>
          Log in with
          <div className="span-line"></div>
        </span>
        ... some login button here ...
      </div>
    </div>
  </div>
);

export default RegisterPage;
