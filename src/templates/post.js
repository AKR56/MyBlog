import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import "../styles/templates/post.scss";

const PostDetail = ({data}) => {
  return (
    <>
      <Layout>
        <article className="post">
          <h2 className="post_title">{data.markdownRemark.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        </article>
      </Layout>
    </>
  )
}

export default PostDetail;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`