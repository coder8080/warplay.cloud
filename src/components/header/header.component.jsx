import "./header.styles.scss";
import { Component } from "react";

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
          <span className="option active">Main</span>
          <span className="option">Servers</span>
          <span className="option">Download</span>
          <span className="option">Open in browser</span>
          <span className="option">Pricing</span>
          <span className="option">Support</span>
          <span className="option">Contacts</span>
        </div>
      </div>
    );
  }
}

export default Header;
