import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
import Deck from "../components/deck"
import Byline from "../components/byline"
import Eyebrow from "../components/eyebrow"
import Timestamp from "../components/timestamp"

const SecondPage = ({ data }) => (
  <Layout pageInfo={{ pageName: "money-tracker" }}>
    <SEO title="Money Tracker" />
    <Eyebrow>ELECTION 2020</Eyebrow>
    <Headline>
      This is the Headline!
    </Headline>
    <Deck>
      This is the Deck!
    </Deck>
    <Timestamp>SEP 21, 2020 4:00AM MDT</Timestamp>
    <hr />
    <Byline />

    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)



export default SecondPage
