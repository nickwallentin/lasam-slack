import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Btn } from "../components/styled"

const DonePage = () => {
  return (
    <Layout>
      <SEO title="Nu är du klar"></SEO>
      <h1>Nu är du klar!</h1>
      <p>
        Tack för att du tog dig tiden att gå igenom guiden. Vi vill gärna
        förbättra den så mycket som möjligt så att den blir enklare för alla att
        använda. Vi hade uppskattat om du tog dig tiden att göra en kort
        utvärdering av guiden, klicka på knappen nedan för att komma igång.
      </p>
      <Btn
        href="https://airtable.com/shrtNnXaAo4K2NcVX"
        target="_blank"
        rel="noopener noreferrer"
      >
        Utvärdera guiden
      </Btn>
    </Layout>
  )
}

export default DonePage
