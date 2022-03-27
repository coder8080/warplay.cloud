import { Component } from "react";

import CustomLink from "../custom-link/custom-link.component";
import "./header.styles.scss";

class Header extends Component {
  state = {
    active: false,
  };

  toggleHidden = () => {
    this.setState((state) => ({
      active: !state.active,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="header-title">
          <i className="fa-solid fa-gamepad"></i> warplay.cloud
        </div>
        <button onClick={() => this.toggleHidden()}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className={`options-container ${this.state.active ? "active" : ""}`}
        >
          <CustomLink to="/" className="option">
            Main
          </CustomLink>
          <span className="option">Servers</span>
          <CustomLink to="/download" className="option">
            Download
          </CustomLink>
          <CustomLink to="/register" className="option">
            Open in browser
          </CustomLink>
          <span className="option">Pricing</span>
          <span className="option">Support</span>
          <span className="option">Contacts</span>
        </div>
      </div>
    );
  }
}

export default Header;
