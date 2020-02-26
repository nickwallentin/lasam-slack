import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hide from "../components/hide"
import { ImgWrap, Btn, Step } from "../components/styled"

const JoinPage = () => {
  const data = useStaticQuery(query)
  const images = data.allFile.edges

  return (
    <Layout next="/installera">
      <SEO title="Gå med i Slack"></SEO>
      <h1>Gå med i Slack</h1>
      <p>
        För att kunna gå med i Landskronasamverkans Slack-kanal så måste du
        först skapa ett konto. När du klickar på knappen i steg 1 så kommer du
        att komma till en ny sida. Vi rekommenderar att du läser igenom stegen
        innan du klickar för att inte missa något viktigt. Annars är det bara
        att följa stegen.
      </p>

      <h2>Steg för steg</h2>
      <div style={{ display: "grid", gridGap: "20px" }}>
        <Step>
          <div className="content">
            <h4>1. Klicka på knappen</h4>
            <p>
              Knappen nedan tar dig till en ny sida som häjlper dig att skapa
              ett konto på Landskronasamverkans Slack-kanal.
            </p>
            <Btn
              href="https://join.slack.com/t/landskronasamverkan/shared_invite/enQtOTU1MjU0MTkwODE4LTI2MDY1ZDlhZDczNWQ1MTExM2FkZjMwZWE4NDg0ZDg3ZjNkZTEzMmMxNzQ0NTQzYTI3MjU5NTc1ZWYwMmM0NjY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gå med i Slack
            </Btn>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[0].node.childImageSharp.fluid}></Img>
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>2. Fyll i din epostadress</h4>
            <p>På den nya sidan fyller du i den epostadress du vill använda.</p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[1].node.childImageSharp.fluid}></Img>
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>3. Verifiera din epost</h4>
            <p>
              När du fyllt i din epost och klickat på knappen så kommer du att
              få ett mail till din epost. I detta mail finns en knapp som du ska
              klicka på för att verifiera din epost.
            </p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[2].node.childImageSharp.fluid}></Img>
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>4. Skapa ditt konto</h4>
            <p>
              När du verifierat ditt konto så kommer du till en sida där du
              skapar ditt konto.{" "}
              <strong style={{ color: "red" }}>Viktigt:</strong> När du fyller i
              ditt namn så skriv <strong>Förnamn [Företag]</strong> istället för
              för- och efternamn. <em>Exempel: Niklas [Creandia]</em>
            </p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[3].node.childImageSharp.fluid}></Img>
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>5. Nu var du klar!</h4>
            <p>
              Efter att du skapat ditt konto så kommer du att komma in i på
              Landskronasamverkans Slack-kanal. För att göra det enklare för dig
              så ska vi nu installera Slack på din telefon och på datorn. På så
              sätt slipper du använda webbläsaren för att se meddelanden.
            </p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[4].node.childImageSharp.fluid}></Img>
            </ImgWrap>
          </div>
        </Step>
      </div>
    </Layout>
  )
}

export default JoinPage

const query = graphql`
  query getAll01Images {
    allFile(
      filter: { relativeDirectory: { eq: "01" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
