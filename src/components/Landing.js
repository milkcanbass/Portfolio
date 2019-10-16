import React, { Component, Fragment } from "react";
import { LandingStyles } from "../styles/landingStyles";
import{LoadingStyles} from '../styles/loadingStyles'
import  ProjectList from './projectList/projectList.component' 
import ProfileSection from './profile/profile.component'
import profImg from "../image/profPic.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Landing extends Component {
  state = {
    sidebar: false,
    profile: "profile",
    headWrapper: "headerWrapperStart",
    load: true
  };

  scrollEvent = () => {
    let scrollY = window.scrollY;
    console.log(scrollY);




    if (scrollY > 1500) {
      this.setState({
        sidebar: true,
        profile: "profAnimate",
        headWrapper: "headerWrapper",
        load: false
      });
    } else if (scrollY > 1300) {
      this.setState({
        sidebar: true,
        profile: "profAnimate",
        headWrapper: "headerWrapper",
        load: false
      });
    } else if (scrollY > 30) {
      this.setState({
        sidebar: false,
        profile: "profAnimate",
        headWrapper: "headerWrapper",
        load: false
      });
    } else {
      this.setState({
        sidebar: false,
        profile: "profile",
        headWrapper: "headerWrapperMoved",
        load: false
      });
    }
  };

  componentDidMount() {
    if (this.state.load) {
      setTimeout(() => {
        this.setState({
          ...this.state,
          load: false,
          headWrapper: "headerWrapperMoved"
        });
      }, 1800);
    }

    window.addEventListener("scroll", this.scrollEvent);
  }

  render() {
    return (
      <Fragment>
        <LandingStyles>
          <div className={this.state.load ? "displayNone" : "borders"}>
            <div className="top" />
            <div className="left" />
            <div className="bottom" />
            <div className="right">
              <div className={this.state.sidebar ? "sideMenu" : "inVisible"}>
                <a
                  href="mailto:shintarokai.com@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="body">
            <div className={this.state.headWrapper}>
              <LoadingStyles>
                <div className={this.state.load ? "background" : "displayNone"}>
                  <div className="loading">
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                  </div>
                </div>
              </LoadingStyles>
              <div className={this.state.load ? "displayNone" : "appear"}>
                <div className="header">
                  <h1 className="hello">
                    <span style={{ color: "#F75998" }}>H</span>ello
                  </h1>
                </div>
                <div className="scrollGuide">
                  <p className="scrollText">scroll</p>
                  <div className="arrow-down1" />
                  <div className="arrow-down2" />
                </div>
                <div className={this.state.profile}>
                  <div className="namePic">
                    <img src={profImg} className="profImg" />
                    <h3 className="name">Shintaro Kai</h3>
                  </div>
                  <div className="profText">
                    <h4>
                      Web developer & Video game designer. Born in Japan, living
                      in Canada.
                    </h4>
                  </div>
                  <div className="links">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/shintaro-kai-4557079b/"
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="icons" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/milkcanbass"
                    >
                      <FontAwesomeIcon icon={faGithub} className="icons" />
                    </a>
                    <a
                      href="mailto:shintarokai.com@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="icons" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={this.state.load ? "displayNone" : "appear"}>
              <ProfileSection />
              <ProjectList />
              </div>
          </div>
        </LandingStyles>
      </Fragment>
    );
  }
}
// }
