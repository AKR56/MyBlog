import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import "../styles/components/Header.scss";
import "../styles/components/Layout.scss";

const Header = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <header className="header">
      <Link to="/" className="header_icon">
        <h1 className="header_title">{data.site.siteMetadata.title}</h1>
      </Link>
      <p className="header_txt">
        AKR's technical blog. This is mainly a record of learning about frontend.
      </p>
    </header>
  )
}

export default Header;