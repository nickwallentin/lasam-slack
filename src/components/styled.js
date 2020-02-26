import styled from "styled-components"
import Img from "gatsby-image"

export const Sec = styled.div`
  h1,
  h2,
  h3 {
    span {
      font-size: 60%;
      color: #00000060;
      font-weight: 300;
      display: block;
    }
  }
`

export const Wrap = styled.div`
  max-width: 90%;
  width: 1080px;
  margin: 0 auto;
`

export const ImgWrap = styled.div`
  padding: 10px;
  background: #f2f2f2;
  border-radius: 5px;
`

export const Btn = styled.a`
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
`
export const Step = styled.div`
  display: grid;
  grid-gap: 20px;

  grid-template-columns: 1fr 1fr;
  background: #f2f2f2;
  border-radius: 5px;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 15px;
    ul {
      list-style: none;
      margin: 0px;
      li {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
  p {
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
