import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "JeremyBarkley.com"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div class="jumbotron">
          <p>
        <img style={{ margin: 0 }} src="./light-bulb-unsplash.jpg" alt="lightbulb" />
        </p>
        </div>
        <h2>
        Let me turn your ideas into great looking, functional websites and web applications.
        </h2>

        <p>I build fast, responsive, mobile first websites:</p>
            <ul><li>Landing page (HTML, CSS, JavaScript)</li>
            <li>CMS Integration (Wordpress - from scratch or theme customization)</li>
            <li>Converting your Design into to a Landing Page or WordPress</li>
            </ul>
            <div class="blog-link">
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
