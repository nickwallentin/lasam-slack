import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NextPrev = ({ next, prev }) => {
  return (
    <NextPrevContainer>
      <div clasName="prev">
        {prev && <Link to={prev}>Föregående steg</Link>}
      </div>
      <div className="next">{next && <Link to={next}>Nästa steg</Link>}</div>
    </NextPrevContainer>
  )
}
const NextPrevContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  div > a {
    padding: 5px 10px;
    background: blue;
    color: white;
    outline: none;
    appearance: none;
    border: none;
    border-radius: 3px;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .next {
    text-align: right;
  }
`
export default NextPrev
