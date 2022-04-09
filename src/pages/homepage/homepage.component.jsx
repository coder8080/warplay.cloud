import ComputerAndServer from "../../assets/computer-and-server.png";
import BrowserScreenshots from "../../assets/screenshots.png";
import Map from "../../assets/map.png";
import Pos from "../../assets/pos.png";
import CustomButtonLink from "../../components/custom-button-link/custom-button-link.component";
import { Link } from "react-router-dom";
import { Component } from "react";
import AOS from "aos";

import OptionCards from "../../components/option-cards/option-cards.component";
import Underline from "../../components/underline/underline.component";
import Footer from "../../components/footer/footer.component";
import "./homepage.styles.scss";

const onScroll = () => {
  const header = document.querySelector(".header");
  const heading = document.querySelector(".heading");
  const scroll_position = window?.pageYOffset;

  if (scroll_position && scroll_position > 0) {
    header.classList.add("active");
    heading.classList.add("deactive");
  } else {
    header.classList.remove("active");
    heading.classList.remove("deactive");
  }
};

class HomePage extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000 });
    let nowOnscroll = document.querySelector("body").onscroll;
    document.querySelector("body").onscroll = () => {
      nowOnscroll?.();
      onScroll();
    };
  }

  componentWillUnmount() {
    document.querySelector("body").onscroll = null;
    document.querySelector(".header").classList.remove("active");
    document.querySelector(".heading").classList.remove("deactive");
  }

  render() {
    return (
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
              <CustomButtonLink destName="content">Upgrade</CustomButtonLink>
            </div>
            <div className="line-after-button" />
          </div>
        </div>
        <div className="content">
          <a name="content" />
          <div className="big-left-line"></div>
          <div className="how-does-it-works">
            <div className="col">
              <img
                src={ComputerAndServer}
                alt="computer-and-server"
                className="img"
                data-aos="fade-down"
              />
            </div>
            <div className="col">
              <span className="subtitle" data-aos="fade-up">
                <div className="subtitle-line"></div>
                Cloud gaming
              </span>
              <h1 className="title">How it works</h1>
              <p className="text" data-aos="fade-right">
                Our servers start the game and send you an image, which you can
                control in the real time!
              </p>
              <div className="line-between-p"></div>
              <p className="text" data-aos="fade-right">
                The app wil start on every PC with processor at least 1.5GHz, 1
                Gb RAM and internet access 15 mbit/s on all operating systems -
                Windows 7, 8, 10, 11, MacOs and Linux.
              </p>
              <Link className="link bottom-link big-link" to="/download">
                Download
              </Link>
            </div>
          </div>
          <div className="fast-start">
            <span className="subtitle" data-aos="fade-up">
              <div className="subtitle-line"></div>
              Fast start
            </span>
            <h1 className="title">Start gaming</h1>
            <div className="steps">
              <div className="step-group">
                <div className="step" data-aos="fade-up">
                  <i className="fa-solid fa-user"></i>
                  Create an account
                </div>
                <div className="connection-line" data-aos="zoom-in"></div>
                <div className="step" data-aos="fade-down">
                  <i className="fa-solid fa-download"></i>
                  Download the module
                </div>
              </div>
              <div className="connection-line middle" data-aos="zoom-in"></div>
              <div className="step-group">
                <div className="step" data-aos="fade-up">
                  <i className="fa-solid fa-check"></i>
                  Select plan
                </div>
                <div className="connection-line" data-aos="zoom-in"></div>
                <div className="step" data-aos="fade-down">
                  <i className="fa-solid fa-gamepad"></i>
                  Start playing
                </div>
              </div>
            </div>
            <Link className="link start-now-link big-link" to="/register">
              Start now
            </Link>
          </div>
          <div className="available-options">
            <span className="subtitle" data-aos="fade-up">
              <div className="subtitle-line"></div>
              Flexible plans
            </span>
            <h1 className="title">Available subscibtions</h1>
            <OptionCards />
            <Underline />
          </div>
          <div className="play-in-browser">
            <div className="col">
              <span className="subtitle" data-aos="fade-up">
                <div className="subtitle-line"></div>
                You can play directly in your browser
              </span>
              <h1 className="title">Run games on all devices</h1>
              <p className="text" data-aos="fade-down">
                Our module is availble for all popular operating systems and
                work on all computers.
              </p>
              <Link className="link bottom-link big-link" to="/download">
                Open in browser
              </Link>
            </div>
            <div className="col">
              <img
                data-aos="fade-down"
                src={BrowserScreenshots}
                alt="screenshots"
              />
            </div>
          </div>
          <div className="servers-map">
            <span className="subtitle" data-aos="fade-up">
              <div className="subtitle-line"></div>
              Game servers on the map
            </span>
            <h1 className="title">Location map</h1>
            <div className="map-container" data-aos="fade-down">
              <img src={Map} alt="map" className="map" />
              <img src={Pos} alt="position" className="position" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
