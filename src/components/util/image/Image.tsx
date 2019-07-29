/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

interface Props {
  imageName: string
  maxWidth?: number
  className?: string
}

const Image = ({ imageName, maxWidth = 500, className = '' }: Props) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        (edge: { node: { fluid: { originalName: string } } }) => edge.node.fluid.originalName === imageName,
      )
      if (!image) {
        return null
      }
      return (
        <div style={{ maxWidth: maxWidth }}>
          <Img className={className} fluid={image.node.fluid} />
        </div>
      )
    }}
  />
)
export default Image
