import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Regular</p>
    <p style={{fontStyle: 'italic'}}>Regular Italic</p>

    <h1>Bold</h1>
    <h1 style={{fontStyle: 'italic'}}>Bold Italic</h1>

    <h1 style={{fontWeight: '900'}}>Black</h1>
    <h1 style={{fontWeight: '900', fontStyle: 'italic'}}>Black Italic</h1>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
