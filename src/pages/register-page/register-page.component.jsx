import { Link } from "react-router-dom";

import "./register-page.styles.scss";
import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.components";
import CustomLink from "../../components/custom-link/custom-link.component";

const RegisterPage = () => (
  <div className="register-page">
    <div className="register-content">
      <div className="register-links">
        <Link to="/" className="back-to-main">
          <i className="fa-solid fa-caret-left"></i>
        </Link>
        <CustomLink to="/register" className="register-link">
          Register
        </CustomLink>
        <CustomLink to="/login" className="register-link">
          Log in
        </CustomLink>
      </div>
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
