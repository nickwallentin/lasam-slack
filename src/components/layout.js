/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Aside from "./aside"
import NextPrev from "./nextPrev"
import "./layout.css"

import { Sec, Wrap } from "./styled"

const Layout = ({ children, next, prev }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Sec>
        <Wrap>
          <Content>
            <Aside />
            <Main>
              {" "}
              {children} <NextPrev next={next} prev={prev} />{" "}
            </Main>
          </Content>
        </Wrap>
      </Sec>
      <footer></footer>
    </React.Fragment>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`
const Main = styled.main`
  background: white;
  min-height: 100vh;
  padding: 40px;
  max-width: 800px;
`

export default Layout
