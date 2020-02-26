import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { ImgWrap, Step, Btn } from "../components/styled"

const InstallPage = () => {
  const data = useStaticQuery(query)
  const images = data.allFile.edges
  console.log(images)

  return (
    <Layout prev="/ga-med" next="/tour">
      <SEO title="Installera slack" />
      <h1>Installera Slack</h1>
      <p>
        Slack finns tillgängligt på flera olika plattformar. Så det finns ett
        val för dig oavsett vilken plattform du använder dig av.
      </p>
      <p>
        Vi rekommenderar att du har Slack på telefonen samt den dator du
        använder mest.
      </p>

      <h2>Installera på telefon</h2>
      <p>
        Ladda ned appen för Slack till din iPhone eller Android telefon. Har du
        ofta med dig din telefon så rekommenderar vi att du inte hoppar över
        detta steg.
      </p>
      <div style={{ display: "grid", gridGap: "20px", marginBottom: "30px" }}>
        <Step>
          <div className="content">
            <h4>Slack till iPhone (App Store)</h4>
            <p>
              Öppna App Store på din iPhone och sök efter "Slack" eller klicka
              på knappen nedan för att komma till App Store.
            </p>
            <Btn
              href="https://apps.apple.com/se/app/slack/id618783545"
              target="_blank"
            >
              Ladda ned Slack
            </Btn>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[0].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>Slack till Android (Google Play)</h4>
            <p>
              Öppna Google Play Store på din Android och sök efter "Slack" eller
              klicka på knappen nedan för att komma till Google Play Store.
            </p>
            <Btn
              href="https://play.google.com/store/apps/details?id=com.Slack&hl=sv"
              target="_blank"
            >
              Ladda ned Slack
            </Btn>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[1].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
      </div>

      <h3>Logga in på telefon</h3>
      <div style={{ display: "grid", gridGap: "20px", marginBottom: "30px" }}>
        <Step>
          <div className="content">
            <h4>1. Öppna appen</h4>

            <p>Öppna slack på din telefon.</p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[2].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>2. Fyll i "Workspace URL"</h4>

            <p>
              När du öppnar appen ska du första skriva in landskronasamverkans
              "workspace URL". Du kan skriva in "landskronasamverkan" i detta
              fält.
            </p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[3].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>3. Fyll i din epost</h4>

            <p>Fyll i den epost du angav när du skapade ditt konto.</p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[4].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>3. Fyll i ditt lösenord</h4>

            <p>Fyll i det lösenord du angav när du skapade ditt konto.</p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[5].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>4. Slå på notifikationer</h4>

            <p>
              Klicka på knappen för att slå på notifikationer. På så sätt får du
              en notis när ny information från Landskronasamverkan publiceras.
            </p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[6].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>

        <Step>
          <div className="content">
            <h4>5. Färdig!</h4>

            <p>
              Snyggt jobbat, nu har du laddat ned Slack och loggat in på din
              telefon. Nu kanske du tänker, vad gör jag nu? Inga problem, mer
              information om hur du använder Slack kommer i nästa steg. Men
              först ska vi installera Slack på din dator också.
            </p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[7].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
      </div>

      <h2>Installera på datorn</h2>
      <p>
        Ladda ned programmet Slack till datorn. Detta steg är inte nödvändigt om
        du oftast har din telefon med dig och inte spenderar så mycket tid
        framför datorn, i så fall räcker det att du har Slack på din telefon.
        Men om du spenderar mycket tid framför datorn så kan det vara smidigt
        att även installera Slack här.
      </p>
      <div style={{ display: "grid", gridGap: "20px", marginBottom: "30px" }}>
        <Step>
          <div className="content">
            <h4>Installera på Mac (Apple)</h4>

            <p>
              Använder du Mac (Apple) så klickar du på knappen nedan. Du har två
              alternativ, ladda ned Slack direkt eller via App Store. Följ sedan
              anvisningarna.
            </p>
            <Btn
              href="https://slack.com/intl/en-se/downloads/mac"
              target="_blank"
            >
              Ladda ned Slack
            </Btn>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[8].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>Installera på PC (Windows)</h4>

            <p>
              Använder du en PC (Windows) så klickar du på knappen nedan. Välj
              "Download 64-BIT". Följ sedan anvisningarna.
            </p>
            <Btn
              href="https://slack.com/intl/en-se/downloads/windows"
              target="_blank"
            >
              Ladda ned Slack
            </Btn>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[9].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
      </div>

      <h3>Logga in på dator</h3>
      <p>Logga in på ditt konto som du skapade i föregående steg.</p>

      <div style={{ display: "grid", gridGap: "20px", marginBottom: "30px" }}>
        <Step>
          <div className="content">
            <h4>1. Öppna programmet</h4>

            <p>Öppna Slack där du hittar dina andra program.</p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[10].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>2. Logga in</h4>

            <p>
              När du startat programmet så klickar du på "Sign in". Din
              webbläsare kommer att öppnas där vi kommer att fortsätta.
            </p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[11].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>3. Fyll i "workspace URL"</h4>

            <p>
              Precis som på telefonen så fyller du landskronasamverkans
              "workspace URL". Här skriver du "landskronasamverkan"
            </p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[12].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>4. Fyll i dina uppgifter</h4>

            <p>
              Här fyller du i din epost och lösenord som du använda när du
              skapade ditt konto (det är samma uppgifter som du använde på
              telefonen).
            </p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[13].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
        <Step>
          <div className="content">
            <h4>5. Färdig!</h4>

            <p>
              Nu är du klar med installtionen av Slack på datorn. Nu är vi snart
              klara, nästa steg blir att lära dig hur du använder Slack.
            </p>
          </div>

          <div className="image">
            <ImgWrap>
              <Img fluid={images[14].node.childImageSharp.fluid} />
            </ImgWrap>
          </div>
        </Step>
      </div>
    </Layout>
  )
}

export default InstallPage

const query = graphql`
  query getAll02Images {
    allFile(
      filter: { relativeDirectory: { eq: "02" } }
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
