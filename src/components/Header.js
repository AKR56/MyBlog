import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Link from "./Link";

import "../styles/components/Layout.scss";

const Header = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="header">
      <div>
        <Link to="/" className="header_icon">
          <h1 className="header_title">{data.site.siteMetadata.title}</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header;