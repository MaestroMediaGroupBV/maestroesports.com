import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import logo from '../images/min/rsz_logo_64-min.png'
import Footer from './Footer'
import Header from './header'
import './layout.css'
import './jobs.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        
        {children}
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// <Header siteTitle={data.site.siteMetadata.title} /> line 21