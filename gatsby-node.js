const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode, basePath:`pages`});
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  };
};

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if(result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges;
    const tags = [];

    posts.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.fields.slug
        }
      })

      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach(tag => {
          tags.push(tag);
        })
      }
    })

    tags.forEach(tag => {
      createPage({
        path: `/tag/${tag}/`,
        component: path.resolve(`./src/templates/tag.js`),
        context: {
          tag,
        },
      });
    });

    return null
  })
}