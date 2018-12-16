import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
          <h1>title: {post.frontmatter.title}</h1>
          <p>description: {post.frontmatter.description}</p>
          <p>date: {post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{__html: post.html}} />
    </Layout>
  )
}

BlogPost.propTypes = {
  description: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`