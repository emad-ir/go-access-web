import React, { Component } from 'react'
import styled from "styled-components"
import ScrollableAnchor from "react-scrollable-anchor";

// Utils
import { SiteColors, PhoneSectionPadding, TabletSectionPadding, DesktopSectionPadding } from '../../utils/constants'
import { PrimaryHeader, SubHeader, DownloadLink } from '../../utils/commonStyles'
import mediaQuery from '../../utils/mediaQuery'
import { arrowAni, slide, phoneSlide } from '../../utils/animation'

// images
import BannerImg from "../../images/banner.jpg"
import AndroidIcon from "../../images/icon_android.svg"
import AppleIcon from "../../images/icon_apple.svg"



const Container = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

    >div{
        padding-left: ${PhoneSectionPadding};
        ${mediaQuery.tablet`
           padding-left: ${TabletSectionPadding};
        `}
        ${mediaQuery.desktop`
           padding-left: ${DesktopSectionPadding};
        `}
    }

    .downloadContainer{
        position: absolute;
        display: flex;
        top: 100px;
        justify-content: space-between;
        flex-direction: row;
        width: 90%;
        z-index: 20;

        ${mediaQuery.tablet`
            bottom: 50px;
            right: 50px;
            top: initial;
            justify-content: initial;
            flex-direction: column;
            width: initial;
        `}
    }
  

    .arrowSliding {
        opacity: 0;
        position: absolute;
        -webkit-animation: ${phoneSlide} 9s linear infinite; 
            animation: ${phoneSlide} 9s linear infinite;
        
        ${mediaQuery.tablet`
           -webkit-animation: ${slide} 9s linear infinite; 
            animation: ${slide} 9s linear infinite;
        `}
        
        &.delay1 {
            -webkit-animation-delay: 1.5s; 
            animation-delay: 1.5s;
        }
        &.delay2 {
            -webkit-animation-delay: 3s; 
            animation-delay: 3s;
        }
        &.delay3 {
            -webkit-animation-delay: 4.5s; 
            animation-delay: 4.5s;
        }
        &.delay4 {
            -webkit-animation-delay: 6s; 
            animation-delay: 6s;
        }
        &.delay5 {
            -webkit-animation-delay: 7.5s; 
            animation-delay: 7.5s;
        }
    }

    

    .arrows{
        position: absolute;
        right: 45px;
        bottom: 200px;

        ${mediaQuery.tablet`
            position: initial;
            bottom: none;
            right: none;
            padding-right: ${DesktopSectionPadding};
        `}

        .material-icons{
            font-size: 40px;
            color: white;
            position: relative;

            &.green{
                color: ${SiteColors.green};
                margin-left: -20px;
            }
        }

        .arrow1{
            grid-column-start: 1;
            grid-row-start: 1;
            grid-row-end: 3;
            /* animation: 1.5s ${arrowAni} infinite linear; */
        }
        .arrow2{
            grid-column-start: 2;
            grid-row-start: 2;
            grid-row-end: 4;
            /* animation: 1.5s ${arrowAni} infinite linear; */
        }
        .arrow3{
            grid-column-start: 1;
            grid-row-start: 4;
            grid-row-end: 6;
            /* animation: 1.5s ${arrowAni} infinite linear; */
        }
        .arrow4{
            grid-column-start: 2;
            grid-row-start: 6;
            grid-row-end: 8;
            /* animation: 1.5s ${arrowAni} infinite linear; */
        }
        .arrow5{
            grid-column-start: 1;
            grid-row-start: 8;
            grid-row-end: 10;
            /* animation: 1.5s ${arrowAni} infinite linear; */
        }
        .arrow6{
            grid-column-start: 2;
            grid-row-start: 10;
            grid-row-end: 12;
            /* animation: 1.5s ${arrowAni} infinite linear; */
        }
    }
`


class Banner extends Component {
    // ref={ref => (this.container = ref)}
    constructor(props) {
        super(props)
        this.state = {
            xWalk: 0,
            yWalk: 0,
        }
        // this.onMouseMove = _.throttle(this.onMouseMove.bind(this), 100)
    }

    componentDidMount() {
        // this.container.addEventListener('mousemove', this.onMouseMove)
    }

    componentWillUnmount() {
        // this.container.removeEventListener('mousemove', this.onMouseMove)
    }

    onMouseMove(e) {
        const { offsetWidth: width, offsetHeight: height } = this.header;
        const walk = 4;
        let { offsetX: x, offsetY: y } = e;
        if (this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }
        const xWalk = Math.round((x / width * walk) - (walk / 2));
        const yWalk = Math.round((y / height * walk) - (walk / 10));

        this.setState({
            xWalk,
            yWalk,
        })
    }

    render() {
        return (
            <div id="banner" ref={ref => (this.container = ref)}>
                <Container >
                    <div>
                        {/* <PrimaryHeader
                            style={{
                                textShadow: `${xWalk}px ${yWalk}px ${SiteColors.textShadow}`
                            }}
                            ref={ref => (this.header = ref)}
                        >
                            GO
                        </PrimaryHeader>
                        <PrimaryHeader
                            style={{
                                textShadow: `${xWalk}px ${yWalk}px ${SiteColors.textShadow}`
                            }}
                            ref={ref => (this.header = ref)}
                        >
                            Access
                        </PrimaryHeader> */}
                        <PrimaryHeader className="shadow">
                            GO
                        </PrimaryHeader>
                        <PrimaryHeader className="shadow">
                            Access
                        </PrimaryHeader>
                        <SubHeader>The Future Of</SubHeader>
                        <SubHeader>Access Control</SubHeader>
                    </div>

                    <div className="arrows">
                        <div className="arrowSliding">
                            <i className="material-icons arrow">arrow_downward</i>
                        </div>
                        <div className="arrowSliding delay1">
                            <i className="material-icons green arrow">arrow_downward</i>
                        </div>
                        <div className="arrowSliding delay2">
                            <i className="material-icons arrow">arrow_downward</i>
                        </div>
                        <div className="arrowSliding delay3">
                            <i className="material-icons green arrow">arrow_downward</i>
                        </div>
                        <div className="arrowSliding delay4">
                            <i className="material-icons arrow">arrow_downward</i>
                        </div>
                        <div className="arrowSliding delay5">
                            <i className="material-icons green arrow">arrow_downward</i>
                        </div>
                    </div>

                    <div className="downloadContainer">
                        <DownloadLink href="https://apps.apple.com/us/app/go-access/id1445123265?ls=1" target="_top">
                            <img src={AppleIcon} alt="Apple Icon" />
                            <div>
                                <p>Available on the</p>
                                <h3>App Store</h3>
                            </div>
                        </DownloadLink>
                        <DownloadLink href="https://play.google.com/store/apps/details?id=za.co.goapp&hl=en" target="_top">
                            <img src={AndroidIcon} alt="Android Icon" />
                            <div>
                                <p>Get it on</p>
                                <h3>Google Play</h3>
                            </div>
                        </DownloadLink>
                    </div>

                    {/* <div className="arrows">
                        <i className="material-icons green arrow">arrow_downward</i>
                        <i className="material-icons arrow2">arrow_downward</i>
                        <i className="material-icons green arrow3">arrow_downward</i>
                        <i className="material-icons arrow4">arrow_downward</i>
                        <i className="material-icons green arrow5">arrow_downward</i>
                        <i className="material-icons arrow6">arrow_downward</i> 
                    </div> */}
                </Container >

            </div>
        )
    }
}

export default Banner
