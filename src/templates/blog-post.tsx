import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/main/Layout'
import SEO from '../components/util/seo/Seo'

interface BlogpostProps {
  pageContext: {
    locale: string
  }
  data: {
    markdownRemark: {
      id: string
      html: string
      frontmatter: {
        date: Date
        title: string
        description: string
      }
    }
  }
}

const BlogPost = ({ pageContext: { locale }, data }: BlogpostProps): JSX.Element => {
  const { markdownRemark: post } = data
  return (
    <Layout locale={locale}>
      <SEO title="SEO Title Home" metaDescription="SEO Desc Home" />
      <h1>title: {post.frontmatter.title}</h1>
      <p>description: {post.frontmatter.description}</p>
      <p>date: {post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
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
