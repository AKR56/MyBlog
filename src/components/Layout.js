import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Tag from "./Tag";

import "../styles/components/Layout.scss";

const Layout = ({ children, location }) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  console.log(data)

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
            <ul className="tags_list">
              {data.allMarkdownRemark.group.map(tag => (
                <Tag key={tag.tag} data={tag.tag} />
              ))}
            </ul>
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

