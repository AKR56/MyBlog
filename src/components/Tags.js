import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import "../styles/components/Layout.scss";
import "../styles/components/Tags.scss";

const TagList = ({select}) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <nav className="tags">
      <ul className="tags_list">

      <Link to='/'>
        <li className="tags_list_item">
          All
        </li>
      </Link>

        {data.allMarkdownRemark.group.map(data => {
          if (data.tag === select) {
            return (
              <Link to={`/tag/${data.tag}`}>
                <li className="tags_list_item selected">
                  {data.tag}
                </li>
              </Link>
            )
          } else {
            return (
              <Link to={`/tag/${data.tag}`}>
                <li className="tags_list_item">
                  {data.tag}
                </li>
              </Link>
            )
          }
        })}
      </ul>
    </nav>
  );
};

export default TagList;
