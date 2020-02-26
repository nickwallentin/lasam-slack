import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Btn, Step, ImgWrap } from "../components/styled"

const Tour = () => {
  const data = useStaticQuery(query)
  const images = data.allFile.edges
  return (
    <Layout prev="/installera">
      <SEO title="Överblick av Slack" />
      <h1>Genomgång av Slack</h1>
      <p>
        På denna sidan kommer du att lära dig det viktigaste i Slack och hur vi
        kommer att arbeta i programmet. Ser programmet annorlunda ut för dig så
        beror det på om du använder dig av mörkt läge på din enhet eller inte.
      </p>
      <h2>Slack på telefonen</h2>

      <div style={{ display: "grid", gridGap: "20px", marginBottom: "30px" }}>
        <Step>
          <div className="content">
            <h4>1. Översta raden</h4>
            <p>
              På översta raden hittar du information om var du är, möjlighet att
              söka och öppna menyer. <strong>1)</strong> Menyn.{" "}
              <strong>2)</strong> Kanalen du är inne på. <strong>3)</strong>{" "}
              Sökfunktion. <strong>4)</strong> Profilmenyn. Klicka på menyn (1)
              för att se alla kanaler.
            </p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[0].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>2. Kanaler</h4>
            <p>
              Slack använder sig av kanaler (channels) som är olika platser man
              kan prata i. I Landskronasamverkans Slack använder vi oss av olika
              kanaler för att dela upp information.
            </p>
            <h5>Våra kanaler</h5>
            <ul>
              <li>
                <strong>information:</strong> Här kommer viktig information att
                delas. <em>Denna kanal kan du enbart läsa.</em>
              </li>
              <li>
                <strong>allmänt:</strong> Här kan du prata med andra medlemmar
                och diskutera det mesta.
              </li>
              <li>
                <strong>event-:</strong> Vi har en kanal för varje evenemang som
                landskronasamverkan genomför. Här kan vi prata specifikt om ett
                visst evenemang.
              </li>
              <li>
                <strong>länkar:</strong> Ibland skapar vi material som kan
                användas för att marknadsföra en viss händelse. Då lägger vi en
                länk till materialet i denna kanal.
              </li>
              <li>
                <strong>möten-medlemmar:</strong> Här lägger vi upp information
                om kommande möten.
              </li>
              <li>
                <strong>möten-styrelsen:</strong> Här läggs information om
                styrelsemöten upp.{" "}
                <em>
                  Denna kanal är låst till dem som är medlemmar i styrelsen{" "}
                </em>
                .
              </li>
              <li>
                <strong>styrelsen:</strong> Denna kanal är till för styrelsen om
                de behöver prata om något som enbart berör styrelsen.
              </li>
            </ul>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[1].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>2. Direktmeddelanden</h4>
            <p>
              Vill du skicka ett meddelande till en specifik person kan du göra
              detta via direktmeddelanden. Dessa meddelanden syns alltså enbart
              mellan dig och den andra personen. För att skicka ett meddelande
              så klickar du på namnet i listan.
            </p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[2].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>3. Säg hej till medlemmarna.</h4>
            <p>
              Nu när du känner till de olika kanalerna så tycker vi det är dags
              att säga hej! Gå till kanalen "allmänt" och skriv hej till de
              andra medlemmarna.
            </p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[3].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>4. Redigera / Ta bort meddelandet.</h4>
            <p>
              Håll nere fingret på ditt meddelande för att öppna menyn. Här kan
              du redigera ditt meddelande eller ta bort det helt. Du kan även
              hålla nere för att reagera eller svara på andras meddelanden.
            </p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[4].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>5. Nämn någon i meddelandet.</h4>
            <p>
              Du kan även nämna en annan person i ditt meddelande om du vill att
              någon speciell verkligen ska se eller svara på ditt meddelande.
              Detta gör du genom att skriva "@" följt av namnet eller välj i
              listan som kommer upp när du skrivit "@".
            </p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[5].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>6. Lägg till en profilbild.</h4>
            <p>
              Det är alltid trevlig med ett ansikte bland medlemmarna. Klicka på
              ikonen uppe till höger (4) för att öppna profilmenyn. Klicka sedan
              på "Edit Profile" för att ändra din bild.
            </p>
          </div>
          <div className="img">
            <ImgWrap>
              <Img fluid={images[0].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>7. Nu är du redo.</h4>
            <p>
              Nu är du redo för Slack! Tack för att du tog dig tiden att gå
              igenom guiden. Vi förstår att man inte lär sig allt på en gång. Du
              kan alltid komma tillbaka till denna sidan för att färska upp ditt
              minne.
            </p>
          </div>
          <div className="content">
            <h5>Behöver du mer hjälp?</h5>
            <p>
              Känner du att denna guide inte räckte till? Klicka då på knappen
              nedan för att begära en personlig utbildning så bokar vi in en dag
              för en personlig genomgång.
            </p>
            <Btn href="https://airtable.com/shrmzjGAtdcMSsACf" target="_blank">
              Begär personlig utbildning
            </Btn>
          </div>
        </Step>
      </div>
      <h2>Slack på datorn</h2>
      <p>
        Slack på datorn fungerar mer eller mindre precis som på telefonen.
        Lyckligtvis får du en bättre överblick på datorn jämfört med telefonen.
        Följer du guiden till telefonen så bör programmet vara enkelt att greppa
        på datorn. Känner du att det blir för komplicerat så tveka in på att{" "}
        <a href="https://airtable.com/shrmzjGAtdcMSsACf" target="_blank">
          begära en personlig genomgång
        </a>
        .
      </p>
      <div
        style={{ display: "grid", gridGap: "20px", marginBottom: "30px" }}
      ></div>
    </Layout>
  )
}

export default Tour

const query = graphql`
  query getAll03Images {
    allFile(
      filter: { relativeDirectory: { eq: "03" } }
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
