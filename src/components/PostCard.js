// Plugins
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

// Styles
import "../styles/components/PostCard.scss";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const PostCard = ({data}) => {
  return (
        <li className="card wrapper">

          <Link to={data.fields.slug}>
            <GatsbyImage className="card_hero" image={data.frontmatter.hero.childImageSharp.gatsbyImageData} />
          </Link>

          <div className="card_meta">

            <ul className="card_tags">
              {data.frontmatter.tags.map(tag => (
                <li>
                  <Link to={`/tag/${tag}`}>
                    #{tag}
                  </Link>
                </li>
              ))}
            </ul>

            <Link to={data.fields.slug}>
              <h2 className="card_title">
                {data.frontmatter.title}
              </h2>
            </Link>

            <p className="card_description">
              {data.frontmatter.description}
            </p>

            <time className="card_time">
              <FontAwesomeIcon icon={faEdit}/>
              {data.frontmatter.date}
            </time>

            {data.frontmatter.update ?
              <time className="card_time card_time-updata">
                <FontAwesomeIcon icon={faHistory}/>
                {data.frontmatter.update}
              </time>
              : false
            }

          </div>
      </li>
  )
};

export default PostCard;