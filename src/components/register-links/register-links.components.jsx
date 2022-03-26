import { Link } from "react-router-dom";
import CustomLink from "../custom-link/custom-link.component";
import "./register-links.styles.scss";

const RegisterLinks = () => (
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
);

export default RegisterLinks;
