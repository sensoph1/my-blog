import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h2>
          Hello, Welcome to your new Gatsby website. You are on your home page.
        </h2>
        <p><strong>
        Let me turn your ideas into great looking, functional websites and web applications.
        </strong>
        </p>
        <p>I build fast, responsive, mobile first websites:</p>
            <ul><li>Landing page (HTML, CSS, JavaScript)</li>
            <li>CMS Integration (Wordpress - from scratch or theme customization)</li>
            <li>Converting your Design file (Sketch or Photoshop) to a Landing Page or WordPress</li>
            </ul>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
