import RegisterLinks from "../../components/register-links/register-links.components";
import CustomInput from "../../components/custom-input/custom-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./login-page.styles.scss";

const LoginPage = () => (
  <div className="login-page">
    <div className="login-content">
      <RegisterLinks />
      <CustomInput type="text" placeholder="Email / Phone" />
      <CustomInput type="password" placeholder="Password" />
      <div className="login-remember-and-button">
        <div className="checkbox-and-text">
          <div className="checkbox-container">
            <input type="checkbox" className="checkbox-input" />
            <i className="fa-solid fa-check"></i>
          </div>
          <span>Remember me</span>
        </div>
        <CustomButton className="bottom-button">Log in </CustomButton>
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

export default LoginPage;
