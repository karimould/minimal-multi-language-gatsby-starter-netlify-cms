import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = ({ pageContext: { locale }}) => (
  <Layout title='404 page title' description='404 page desc' locale={locale}>
    <div>
      <h1>NOT FOUND</h1>
      <h2>{locale}</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
