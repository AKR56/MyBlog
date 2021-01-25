import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";

import "../styles/components/Layout.scss";

const Layout = ({ children, location }) => {

  return (
    <div className="layout">
      <Header/>
        <div className="container">

          <main className="articles">
          <nav className="location">
            {location}
          </nav>
            {children}　
          </main>

          <nav className="tags">
            tags
          </nav>

          <div className="profile">
            profile
          </div>

        </div>

      <footer className="footer">
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
