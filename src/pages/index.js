import React, { Component } from "react"

// Utils
import Layout from "../components/layout"
import SEO from "../components/seo"

// Page Sections
import Banner from '../components/sections/banner'
import WhyGo from '../components/sections/whyGo'
import GoGreen from '../components/sections/goGreen'
import GoEcosystem from '../components/sections/goEcosystem'
import Faq from '../components/sections/faq'
import Contact from '../components/sections/contact'

class IndexPage extends Component {
    render() {
        const { search } = this.props.location
        const formSuccess = search.indexOf('success') > -1
        return (
            <Layout location={this.props.location}>
                <SEO title="Home" />
                <Banner></Banner>
                <WhyGo location={this.props.location}></WhyGo>
                <GoGreen></GoGreen>
                <GoEcosystem></GoEcosystem>
                <Faq></Faq>
                <Contact success={formSuccess}></Contact>
            </Layout>
        );
    }
}

export default IndexPage
