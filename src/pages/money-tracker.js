import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
import Deck from "../components/deck"

const SecondPage = ({ data }) => (
  <Layout pageInfo={{ pageName: "money-tracker" }}>
    <SEO title="Money Tracker" />
    
    <Headline>
      This is the Headline!
    </Headline>
    <Deck>
      This is the Deck!
    </Deck>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)



export default SecondPage
