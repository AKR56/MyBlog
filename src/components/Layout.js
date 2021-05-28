import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Profile from "./Profile";

import "../styles/components/Layout.scss";

const Layout = ({ children }) => {

  return (
    <div className="layout">
      <Header/>

      <div className="inner">
        <main className="articles">
          {children}　
        </main>
      </div>

      <Profile/>

      <footer className="footer">
        <div className="footer_txt">
          &copy; 
          {new Date().getFullYear()}
          <a href="https://twitter.com/AKR56_" target="_blank" rel="noreferrer"> AKR</a>,
          Built with
          <a href="https://www.gatsbyjs.org"> Gatsby</a>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
