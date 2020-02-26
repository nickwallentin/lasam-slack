import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Aside from "../components/aside"

import { Sec, Wrap } from "../components/styled"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Introduktion</h1>
    <p>
      Slack gör det möjligt för oss att samla all information på en plats.
      Samtidigt öppnar verktyget upp för flervägskommunikation bland alla
      medlemmar.
    </p>
    <p>
      Många av oss har upplevt att mailutskick inte är en bra kanal av många
      olika skäl, bland annat så kan det vara svårt att hålla koll på all
      information som skickas ut.
    </p>
    <p>
      Vi hoppas att detta verktyg ska stärka samarbetet mellan medlemmarna
      framöver. På denna sida kommer du att lära dig allt du behöver veta om
      Slack och hur vi kommer att arbeta med detta verktyg framöver för att
      underlätta Landskronasamverkans interna kommunikation.
    </p>
    <h3>Upplägg</h3>
    <p>
      Denna sidan är uppbygd för att göra det enkelt för dig att komma igång med
      Slack. Nedan följer de olika stegen du behöver göra för att börja använda
      Slack.
    </p>
    <p>
      <strong>Guiden tar ca 10 minuter</strong>
    </p>
    <ol>
      <li>
        <Link to="/ga-med">Börja här</Link>
      </li>
      <li>
        <Link to="/installera">Installera Slack</Link>
      </li>

      <li>
        <Link to="/tour">Genomgång av Slack</Link>
      </li>
    </ol>
  </Layout>
)

export default IndexPage
