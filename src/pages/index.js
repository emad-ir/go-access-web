import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component';

import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

class IndexPage extends Component {
    handleScrollEvent = () => {
        scrollToComponent(this.refs.contact, {
            offset: 1000,
        });
    }
    render() {
        return (
            <div>
                <Banner onScroll={this.handleScrollEvent} />
                <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                    <input type="text" name="name" />
                    <input type="email" name="email" />
                    <textarea name="message"></textarea>
                </form>
                <Contact ref="contact" />
                <Footer />
            </div>
        )
    }
}

export default IndexPage
