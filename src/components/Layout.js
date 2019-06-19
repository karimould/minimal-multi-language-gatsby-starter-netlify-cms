import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Layout = ({ children, title, description, locale, type='website' }) => (
  <>
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
      <meta name="theme-color" content="#fff" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/img/og-image.jpg" />
    </Helmet>
    <div>{children}</div>
  </>
  )

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    locale: PropTypes.string,
    type: PropTypes.string,
  }

export default Layout
