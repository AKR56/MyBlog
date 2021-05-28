import React from "react";
// import { Link } from "gatsby";

import Icon from "../image/icon.jpg";

import "../styles/components/Profile.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Profile = () => (
  <div className="profile">
    <div className="profile_icon">
      <img src={Icon} alt="icon"/>
    </div>
    <h1 className="profile_name">AKR</h1>
    <div className="profile_text">
      <p>Web開発勉強中の山形在住の20代です。</p>
      <p>好きなフレームワークはLaravel, React, GatsbyJSなど。</p>
      <p>UI/UXデザインからフロント・バックエンドまでこなせるかっこいいエンジニアになることが夢です。</p>
    <ul className="profile_link">
      <li>
        <a href="https://github.com/AKR56" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/AKR56_" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter}/>
        </a>
      </li>
      {/* <li><a href="/"><FontAwesomeIcon icon={faEnvelope}/></a></li> */}
    </ul>
    </div>
  </div>
);

export default Profile;