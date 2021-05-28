// packages
import React from "react";
import { graphql } from "gatsby";

// components
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import Tags from "../components/Tags";
import Seo from "../components/SEO";

const IndexPage = ({data}) => (
  <Layout location="Top">

    <Seo/>

    <Tags select="all"/>

    <ul className="posts">
      {data.allMarkdownRemark.edges.map( ({node}) => (
        <PostCard key={node.fields.slug} data={node} />
      ))}
    </ul>

  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            update(formatString: "YYYY-MM-DD")
            tags
            description
            hero {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
        }
      }
    }
  }
`;