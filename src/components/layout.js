/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import Media from "react-media"

import styled from "styled-components"

import Header from "./header"
import Aside from "./aside"
import NextPrev from "./nextPrev"
import "./layout.css"
import MenuIcon from "../assets/icons/menu.svg"

import { Sec, Wrap } from "./styled"

const Layout = ({ children, next, prev }) => {
  const [menu, setMenu] = useState(false)

  return (
    <React.Fragment>
      <Header />
      <Sec>
        <Wrap>
          <Content>
            <Media
              query="(max-width: 800px)"
              render={() => (
                <Aside mobile={true} menu={menu} setMenu={setMenu} />
              )}
            />
            <Media
              query="(min-width: 801px)"
              render={() => (
                <Aside mobile={false} menu={menu} setMenu={setMenu} />
              )}
            />
            <Media
              query="(max-width: 800px)"
              render={() => (
                <div
                  style={{
                    padding: "20px 40px",
                    background: "#ffffff",
                    display: "flex",
                    alignItem: "center",
                  }}
                  onClick={() => setMenu(true)}
                >
                  <MenuIcon style={{ marginRight: "15px" }} />{" "}
                  <span style={{ lineHeight: "1.7rem" }}>Meny</span>
                </div>
              )}
            />
            <Main setMenu={setMenu} menu={menu}>
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
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
const Main = styled.main`
  background: white;
  min-height: 100vh;
  padding: 40px;
  max-width: 800px;
`

export default Layout
