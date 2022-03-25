import ComputerAndServer from "../../assets/computer-and-server.png";
import CustomButton from "../../components/custom-button/custom-button.components";
import "./homepage.styles.scss";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="homepage">
    <div className="banner-container">
      <div className="banner">
        <h1 className="heading">
          <i className="fa-solid fa-gamepad"></i> warplay.cloud
        </h1>
        <div className="banner-content">
          <span className="subtitle">Cloud gaming platform</span>
          <h1 className="title"> Turn your device into gaming one</h1>
        </div>
        <div className="line" />
        <div className="bottom-button-container">
          <CustomButton>Upgrade</CustomButton>
        </div>
        <div className="line-after-button" />
      </div>
    </div>
    <div className="content">
      <div className="big-left-line"></div>
      <div className="how-does-it-works">
        <div className="col">
          <img
            src={ComputerAndServer}
            alt="computer-and-server"
            className="img"
          />
        </div>
        <div className="col">
          <span className="subtitle">
            <div className="subtitle-line"></div>
            Cloud gaming
          </span>
          <h1 className="title">How it works</h1>
          <p className="text">
            Our servers start the game and send you an image, which you can
            control in the real time!
          </p>
          <div className="line-between-p"></div>
          <p className="text">
            The app wil start on every PC with processor at least 1.5GHz, 1 Gb
            RAM and internet access 15 mbit/s on all operating systems - Windows
            7, 8, 10, 11, MacOs and Linux
          </p>
          <Link className="link bottom-link" to="/download">
            Download
          </Link>
        </div>
      </div>
      <div className="fast-start">
        <span className="subtitle">
          <div className="subtitle-line"></div>
          Fast start
        </span>
        <h1 className="title">Start gaming</h1>
        <div className="steps">
          <div className="step-group">
            <div className="step">
              <i className="fa-solid fa-user"></i>
              Create an account
            </div>
            <div className="connection-line"></div>
            <div className="step">
              <i className="fa-solid fa-download"></i>
              Download the module
            </div>
          </div>
          <div className="connection-line middle"></div>
          <div className="step-group">
            <div className="step">
              <i className="fa-solid fa-check"></i>
              Select plan
            </div>
            <div className="connection-line"></div>
            <div className="step">
              <i className="fa-solid fa-gamepad"></i>
              Start playing
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
