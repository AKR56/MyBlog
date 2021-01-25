// packages
import React from "react";
import { graphql } from "gatsby";

// components
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

// styles
import "../styles/reset.scss";

const IndexPage = ({data}) => {

  return (
    <>
      <Layout location="Top">
        {data.allMarkdownRemark.edges.map( ({node}) => (
          <PostCard key={node.fields.slug} data={node} />
        ))}
      </Layout>
    </>
  )
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
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
    }
  }
`;