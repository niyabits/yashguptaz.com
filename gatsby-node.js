const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blog-post.js")

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            html
            id
            frontmatter {
              date
              title
              spoiler
              path
            }
          }
        }
      }
    }
  `).then(res => {
    const posts = res.data.allMarkdownRemark.edges

    if (res.errors) {
      return Promise.reject(res.errors)
    }

    posts.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          next: index === 0 ? null : posts[index - 1].node,
          prev: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })
  })
}
