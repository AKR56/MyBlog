import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import Tags from "../components/Tags";
import Seo from "../components/SEO";

const TagTemplate = ({pageContext, data}) => {

  const { tag } = pageContext;
  const location = tag;

  return (
    <>
      <Layout>
      <Seo
        title={`Tag : ${tag}`}
      />
        <Tags select={location}/>
        <ul className="posts">
        {data.allMarkdownRemark.edges.map( ({node}) => (
          <PostCard key={node.fields.slug} data={node} />
          ))}
        </ul>
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