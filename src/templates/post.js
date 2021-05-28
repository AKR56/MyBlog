import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/SEO";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

// Styles
import "../styles/templates/post.scss";
import "prismjs/themes/prism-tomorrow.css"

const PostDetail = ({pageContext, data}) => {
  const post = data.markdownRemark;
  const {location} = pageContext;
  console.log(location);

  return (
    <Layout location={location}>

      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <article className="wrapper">

        <div className="post">
          <div className="post_meta">
            <h1 className="post_title">{post.frontmatter.title}</h1>

            <ul class="post_tags">
              {post.frontmatter.tags.map(tag => (
                <li>
                  <Link to={`/tag/${tag}`}>
                    #{tag}
                  </Link>
                </li>
              ))}
            </ul>
            
            <time className="post_time" >
              <FontAwesomeIcon icon={faEdit}/>
              {post.frontmatter.date}
            </time>

            {post.frontmatter.update ?
              <time className="post_time">
                <FontAwesomeIcon icon={faHistory}/>
                {post.frontmatter.update}
              </time>
              : false
            }

          </div>
          <GatsbyImage className="post_hero" image={post.frontmatter.hero.childImageSharp.gatsbyImageData} />


          <nav className="post_index">
            <span className="post_index_text">目次</span>
            <div className="post_index_list" dangerouslySetInnerHTML={{__html: post.tableOfContents}} />
          </nav>

          <div className="post_body" dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
      </article>
    </Layout>
  )
}

export default PostDetail;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug}}) {
      tableOfContents
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        update(formatString: "YYYY-MM-DD")
        title
        description
        tags
        hero {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`