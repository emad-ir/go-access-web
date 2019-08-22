import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor'

import Navbar from "./navbar"
import IRLogo from '../images/ir_logo.png'
import { SiteColors, PhoneSectionPadding, TabletSectionPadding, DesktopSectionPadding } from "../utils/constants";
import mediaQuery from "../utils/mediaQuery";

// Fonts
import MontserratBlack from '../fonts/Montserrat-Black.ttf'
import MontserratBold from '../fonts/Montserrat-Bold.ttf'
import MontserratExtraBold from '../fonts/Montserrat-ExtraBold.ttf'
import MontserratMedium from '../fonts/Montserrat-Medium.ttf'
import MontserratRegular from '../fonts/Montserrat-Regular.ttf'
import MontserratLight from '../fonts/Montserrat-Light.ttf'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Montserrat-Black';
        src: url(${MontserratBlack});
    }
    @font-face {
        font-family: 'Montserrat-Bold';
        src: url(${MontserratBold});
    }
    @font-face {
        font-family: 'Montserrat-ExtraBold';
        src: url(${MontserratExtraBold});
    }
    @font-face {
        font-family: 'Montserrat-Medium';
        src: url(${MontserratMedium});
    }
    @font-face {
        font-family: 'Montserrat-Regular';
        src: url(${MontserratRegular});
    }
    @font-face {
        font-family: 'Montserrat-Light';
        src: url(${MontserratLight});
    }

    body {
        font-weight: 400;
        box-sizing: border-box;
        margin: 0;
        background: white;
        font-family: 'Montserrat-Regular', sans-serif;
    }

    main {
      position: relative;
    }


    a{
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0px;
        padding: 0px;

        font-variant-ligatures: common-ligatures;
        font-style: normal;
        line-height: 1.25;
    }

    p{
        font-size: 12px;
    }

    .wf-loading {
        visibility: hidden;
    }


    .bold{
    }

    ul {
        padding-left: 0px;
        margin-bottom: 0px;

        li {
            list-style: none;
        }
    }

    input[type=text],
    input[type=password] {
        box-sizing : border-box;
    }

    img{
        width: 100%;
        height: 100%;
    }

    footer{
        background: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px ${PhoneSectionPadding};
        text-transform: uppercase;

        ${mediaQuery.tablet`
            padding: 15px ${TabletSectionPadding};
        `}
        ${mediaQuery.desktop`
            padding: 15px ${DesktopSectionPadding};
        `}
        p{
            color: white;
        }
        h5{
            color: ${SiteColors.green};
        }
        img{
            width: 25px;
        }
    }
`

const Layout = (props) => {
    configureAnchors({ offset: -60, scrollDuration: 1000 });
    if (props.location) {
        const { search } = props.location
        if (search !== '' && search.indexOf('success') > -1) {
            goToAnchor('contact', true);
            setTimeout(() => {
                window.history.pushState('', 'Home | Go Access', '/#contact');
            }, 2000);
        }
    }

    return (
        <>
            <GlobalStyle />
            <main>
                <Navbar location={props.location} />
                {props.children}
            </main>

            <footer>
                <div>
                    <p>Created By</p>
                    <h5>Infinite Reality</h5>
                </div>
                <a href="http://www.infinitereality.co.za" target="_blank" rel="noopener noreferrer">
                    <img src={IRLogo} alt="Infinite Reality Logo" />
                </a>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
