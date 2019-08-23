import React from "react"
import styled from "styled-components"
import ScrollableAnchor from "react-scrollable-anchor";

// Utils
import { SiteColors, TabletSectionPadding, DesktopSectionPadding } from '../../utils/constants'
import mediaQuery from '../../utils/mediaQuery'


import TreeImg from "../../images/tree.svg"


const Container = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    
    padding: 80px ${TabletSectionPadding};
    background: ${SiteColors.lightGreen};

    ${mediaQuery.desktop`
        grid-template-columns: 30% 30% 40%;
    `}
    ${mediaQuery.large`
        grid-template-columns: 40% 30% 30%;
        grid-template-rows: auto auto;
        padding: 80px ${DesktopSectionPadding};
    `}

    .br{
        display: none;
        ${mediaQuery.tablet`
            display: block;
        `} 
    }

    img{
        display: block;
        grid-row-start: 3;
        grid-column-start: 2;
        height: auto;
        max-width: 350px;
        min-width: 280px;
        margin: 0 auto;
        ${mediaQuery.desktop`
            grid-column-start: none;
            width: 500px;
            bottom: -56px;
            left: 100px;
            position: absolute;
            max-width: none;
            margin: none;
        `}

        ${mediaQuery.large`
            width: 600px;
        `}
    }
    h2{
        grid-column-start: 1;
        grid-column-end: 4;
        text-align: right;
        font-size: 40px;
        text-transform: uppercase;
        color: ${SiteColors.darkGreen};
        font-family: 'Montserrat-Bold';
        span{
            color: ${SiteColors.green};
        }
        ${mediaQuery.desktop`
            grid-column-start: 2;
            grid-column-end: 4;
        `}
    }

    p{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 2;
        color: ${SiteColors.darkGreen};

        padding: 20px 0px;
        text-align: right;
        font-size: 16px;
        line-height: 22px;
        ${mediaQuery.desktop`
            grid-column-start: 3;
        `}
    }
`

const GoGreen = () => (
    <div id="go-green">
        <Container>
            <img src={TreeImg} alt="" />
            <h2>Green meens go, that's <br className="br" /> why we're <span>going green!</span></h2>
            <p>Our highest priority is to deliver technology that enhances human connection and interaction.
                    By using your smartphone as an access control tool, you are helping us do our bit to protect and sustain the environment.
                <br />
                <br />
                It’s time to ditch your plastic remotes, access cards and tags.
                No more paper parking tickets, which means we’re saving our trees.
                And less time spent in queues which means less Co2 emissions.
            </p>
        </Container>
    </div>
)

export default GoGreen
