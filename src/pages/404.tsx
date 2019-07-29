import React, { ReactElement } from 'react'
import Layout from '../components/layouts/main/Layout'
import SEO from '../components/util/seo/Seo'

const NotFoundPage = (): ReactElement => (
  <Layout>
    <SEO title="404: Not found" metaDescription="SEO DESC - 404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
