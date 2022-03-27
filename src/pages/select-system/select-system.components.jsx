import { Link } from "react-router-dom";

import Windows from "../../assets/windows.svg";
import Apple from "../../assets/apple.svg";
import Linux from "../../assets/linux.svg";
import Chrome from "../../assets/chrome.svg";
import "./select-system.styles.scss";

const SelectSystemPage = () => (
  <div className="select-system-page">
    <div className="systems-content">
      <div className="title-container">
        <Link to="/">
          <i className="fa-solid fa-caret-left"></i>
        </Link>
        <h1>Select operating system</h1>
      </div>
      <div className="available-systems">
        <Link to="/register">
          <img src={Windows} alt="Windows" className="system-logo" />
        </Link>
        <Link to="/register">
          <img src={Apple} alt="Mac Os" className="system-logo" />
        </Link>
        <Link to="/register">
          <img src={Linux} alt="Linux" className="system-logo" />
        </Link>
        <Link to="/register">
          <img src={Chrome} alt="Chrome" className="system-logo" />
        </Link>
      </div>
    </div>
  </div>
);

export default SelectSystemPage;
