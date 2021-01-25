import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

const TagTemplate = ({pageContext, data}) => {

  const { tag } = pageContext;
  const location = `tag: ${tag}`;

  return (
    <>
      <Layout location={location}>
        {data.allMarkdownRemark.edges.map( ({node}) => (
          <PostCard key={node.fields.slug} data={node} />
        ))}
      </Layout>
    </>
  )
}

export default TagTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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