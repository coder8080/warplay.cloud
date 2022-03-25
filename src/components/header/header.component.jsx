import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="header-title">
      <i className="fa-solid fa-gamepad"></i> warplay.cloud
    </div>
    <div className="options-container">
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

export default Header;
