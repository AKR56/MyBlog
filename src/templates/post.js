import React from "react";
import {graphql} from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";

import "../styles/templates/post.scss";

const PostDetail = ({data}) => {
  const post = data.markdownRemark;

  return (
    <Layout index={post.tableOfContents}>
      <article>
        <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid}/>
        <div className="post">
          <time>{post.frontmatter.date}</time>
          <h1 className="post_title">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </div>
      </article>
      <nav>
        <div dangerouslySetInnerHTML={{__html: post.tableOfContents}} />
      </nav>
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
        tags
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`