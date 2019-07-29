import React, { ReactNode } from 'react'
import './layout.scss'

interface Props {
  children: ReactNode
  locale: string
}

const Layout = ({ children, locale }: Props): JSX.Element => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
