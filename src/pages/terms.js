import React, { Component } from "react"

// Utils
import Layout from "../components/layout"
import SEO from "../components/seo"

// Page Sections
import Terms from '../components/sections/privacy'

class IndexPage extends Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <SEO title="Terms and conditions" />
                <Terms></Terms>
            </Layout>
        );
    }
}

export default IndexPage

