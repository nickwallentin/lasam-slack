import React from "react"
import { Link } from "gatsby"
import Media from "react-media"
import styled from "styled-components"

const Aside = ({ menu, setMenu, mobile }) => {
  return (
    <React.Fragment>
      {mobile && menu ? (
        <AsideContainer>
          <div className="menu-header">
            <h4>Meny</h4>
            <Media
              query="(max-width: 800px)"
              render={() => <span onClick={() => setMenu(false)}>Stäng</span>}
            />
          </div>

          <Menu>
            <MenuItem to="/">Introduktion</MenuItem>
            <MenuHeader activeClassName="current" to="/ga-med">
              <span>Steg 1</span> Gå med
            </MenuHeader>
            <MenuHeader activeClassName="current" to="/installera">
              <span>Steg 2</span> Installation
            </MenuHeader>
            <MenuHeader activeClassName="current" to="/tour">
              <span>Steg 3</span> Genomgång av Slack
            </MenuHeader>
          </Menu>
        </AsideContainer>
      ) : !mobile ? (
        <AsideContainer>
          <div className="menu-header">
            <h4>Meny</h4>
            <Media
              query="(max-width: 800px)"
              render={() => <span onClick={() => setMenu(false)}>Stäng</span>}
            />
          </div>

          <Menu>
            <MenuItem to="/">Introduktion</MenuItem>
            <MenuHeader activeClassName="current" to="/ga-med">
              <span>Steg 1</span> Gå med
            </MenuHeader>
            <MenuHeader activeClassName="current" to="/installera">
              <span>Steg 2</span> Installation
            </MenuHeader>
            <MenuHeader activeClassName="current" to="/tour">
              <span>Steg 3</span> Genomgång av Slack
            </MenuHeader>
          </Menu>
        </AsideContainer>
      ) : null}
    </React.Fragment>
  )
}

const AsideContainer = styled.aside`
  background: #f2f2f2;
  height: 100vh;
  padding: 40px 0px;
  .menu-header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;
  }
  @media screen and (max-width: 800px) {
    position: fixed;
    display: block;
    top: 0px;
    left: 0px;
    width: 100vw;

    z-index: 99;
    padding: 40px;
  }
`

const Menu = styled.nav`
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: black;
    font-family: sans-serif;
    display: block;
  }
`
const MenuItem = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: black;
  font-family: sans-serif;
`
const MenuHeader = styled(Link)`
  margin: 20px 0px 10px 0px;
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  font-size: 1rem !important;
  display: block;
  &.current {
    color: blue !important;
  }
  span {
    display: block;
    text-transform: uppercase;
    font-size: 70%;
    margin-bottom: 0px;
    font-weight: 500;
    color: #00000080;
  }
  &:hover {
    text-decoration: underline;
    span {
      text-decoration: none;
    }
  }
`

export default Aside
