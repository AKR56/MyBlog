import React from "react";
import Link from "./Link";
import Img from "gatsby-image";

import "../styles/components/PostCard.scss";

import Tag from "./Tag";

const PostCard = ({data}) => {
  return (
    <div className="card">
      <Link to={data.fields.slug}>
        <Img className="card_thumbnail" fluid={data.frontmatter.thumbnail.childImageSharp.fluid} />

        <div className="card_meta">
          <time className="card_time">{data.frontmatter.date}</time>
          { data.frontmatter.update ? <time className="card_time card_time-updata">更新:{data.frontmatter.update}</time> : false }

          <h2 className="card_title">{data.frontmatter.title}</h2>

          <ul className="card_tags">
            {data.frontmatter.tags.map(tag => (
              <Tag key={tag} data={tag} />
            ))}
          </ul>
        </div>
      </Link>
    </div>
  )
};

export default PostCard;