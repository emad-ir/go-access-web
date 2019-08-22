import React, { Component } from 'react'
import styled from "styled-components"
import ScrollableAnchor from "react-scrollable-anchor";


// Utils
import { SiteColors, TabletSectionPadding, DesktopSectionPadding } from '../../utils/constants'
import { SecondaryHeader } from '../../utils/commonStyles'
import { pulse } from '../../utils/animation'
import mediaQuery from '../../utils/mediaQuery'

// images
import PhoneImg from "../../images/phone2.png"
import CongestionImg from "../../images/icon_congestion.svg"
import EverywhereImg from "../../images/icon_everywhere.svg"
import LogsImg from "../../images/icon_logs.svg"
import SafetyImg from "../../images/icon_saftey.svg"
import BluetoothImg from "../../images/icon_bt.svg"

import SmCongestionImg from "../../images/sm_icon_congestion.svg"
import SmEverywhereImg from "../../images/sm_icon_everywhere.svg"
import SmLogsImg from "../../images/sm_icon_logs.svg"
import SmSafetyImg from "../../images/sm_icon_saftey.svg"
import SmBluetoothImg from "../../images/sm_icon_bt.svg"



const SafetyDesc = "Increased safety - no more stopping, opening of windows or struggling with unreadable fingerprints. Never worry about queueing at your estate again! Welcome a faster experience with less waiting and more doing!"
const BluetoothDesc = "Bluetooth technology – No airtime and no data is required! Simply enable your Bluetooth to connect to your access points."
const CongestionDesc = "Decreased congestion – no more queueing at your complex or estate."
const LogsDesc = "Full access logs of entry & exit times – Estate managers will get their own personalized dashboard to manage tenant’s entry & exit effortlessly."
const EverywhereDesc = "Go goes everywhere - Thanks to our amazing hardware, Go can integrate with almost any access point. This means that you can use one device for all your garages, gates and booms."


const Container = styled.section`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: ${TabletSectionPadding} 1fr 2fr 1fr ${TabletSectionPadding};
    grid-template-rows: auto repeat(3, 1fr) 50px;
    margin-top: 0px;

    ${mediaQuery.desktop`
        grid-template-rows: 80px repeat(3, 1fr) 50px;
    `}
    ${mediaQuery.large`
        grid-template-rows: 150px repeat(3, auto) 50px;
        margin-top: -100px;
        grid-template-columns: ${DesktopSectionPadding} 1fr 2fr 1fr ${DesktopSectionPadding};
    `}
    


    .background-circle {
        background: ${SiteColors.lightGreen};
        width: 200px;
        height: 200px;
        border-radius: 50%;
        position: absolute;
        top: -70px;
        left: -20px;
        z-index: 1;
        
        ${mediaQuery.desktop`
            width: 300px;
            height: 300px;
        `}
        ${mediaQuery.large`
            width: 400px;
            height: 400px;
        `}
    }

    .header{
        grid-column-start: 2;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 2;
        z-index: 10;


        display: grid;
        grid-template-columns: 100px auto;
        grid-template-rows: 70px auto;

        
        ${mediaQuery.desktop`
            grid-template-rows: 100px minmax(auto, 300px);
            grid-column-end: 3;
            grid-row-end: 3;
        `}

        .mobile-header{
            display: initial;
            ${mediaQuery.desktop`
                display: none;
            `}
        }

        .why{
            grid-column-start: 1;
            grid-column-end: 3;
            ${mediaQuery.desktop`
               grid-column-end: 1;
            `}
        }

        .go{
            grid-row-start: 2;
            display: none;
            ${mediaQuery.desktop`
                display: block;
            `}
        }

        .description{
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 2;

            font-size: 16px;
            line-height: 25px;
            margin-top: 15px;
            ${mediaQuery.desktop`
                grid-column-start: 2;
                grid-column-end: 2;
            `}
        }
    }

    .phone{
        grid-column-start: 1;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 5;
        z-index: 5;
        max-height: 605px;
        transition: all 0.5s ease;

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        ${mediaQuery.phone`
            grid-column-start: 2;
            grid-column-end: 5;
            max-height: 800px;
        `}

        ${mediaQuery.desktop`
            transform: translateY(-150px);
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 2;
            grid-row-end: 6;
            &.active{
                transform: translateY(0);
            }
        `}

        img.phoneImg{
            width: 100%;
            min-height: 600px;

            ${mediaQuery.phone`
                max-width: 485px;
                min-width: 510px;
                min-height: 800px;
            `}
            ${mediaQuery.desktop`
                position: absolute;
                top: 0;
            `}
        }

        .phone-content{
            background: ${SiteColors.darkBack};
            z-index: 6;
            width: 64%;
            height: 75%;
            max-height: 440px;
            border-radius: 50px;
            position: absolute;
            left: 50%;
            top: 90px;
            transition: all 0.5s ease;

            display:grid;
            grid-template-rows: 1fr 1fr 70px;
            justify-content: center;
            transform: translateX(-50%);

            ${mediaQuery.phone`
                width: 318px;
                height: 611px;
                max-height: none;
            `}
            /* ${mediaQuery.tablet`
                transform: translate(-50%, -50px);
                &.active{
                    transform: translate(-50%, 0);
                }
            `} */

            .icon-container{
                width: 150px; 
                height: 150px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content:center;
                justify-self:center;
                grid-row-start: 1;
                
                &::before{
                    z-index: -1;
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 150px; 
                    height: 150px;
                    border-radius: 50%;
                    background: red;
                    background: ${SiteColors.darkGray2};
                    animation: 3s ${pulse} infinite linear;
                }

               img{
                    width: 60px;
                   /* height: 80px; */
               }

               ${mediaQuery.phone`
                    width: 200px; 
                    height: 200px;
                    &::before{
                        width: 200px; 
                        height: 200px;
                    }

                    img{
                        width: 80px;
                    }
                `}
            }

            .description{
                text-align: center;
                padding: 0px 15px;
                align-self: center;
                grid-row-start: 2;
                grid-row-end: 4;

                ${mediaQuery.desktop`
                    align-self: flex-end;
                    grid-row-end: 3;
                `}

                p{
                    font-size: 14px;
                    line-height: 20px;
                    color: white;
                }
            }

            .phone-nav{
                background: ${SiteColors.darkGreen};
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                border-bottom-left-radius: 25px;
                border-bottom-right-radius: 25px;
                padding: 10px 0px;

                >div{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-self: center;
                    align-items: center;

                    &:first-child{
                        border-bottom-left-radius: 25px;
                    }
                    &:last-child{
                        border-bottom-right-radius: 25px;
                    }
                }

                img{
                    height: 25px;
                    width: 25px;
                    margin: 0 auto;
                    opacity: 0.3;

                    &.active{
                        opacity: 1;
                    }
                }

                ${mediaQuery.desktop`
                    display: none;
                `}
            }
        }
    }

    .selection-block{
        display: none;
        align-items: center;
        justify-content: center;

        ${mediaQuery.desktop`
            display: flex;
        `}
        /* ${mediaQuery.desktop`
            display: flex;
        `} */

        .title{
            text-transform: uppercase;
            font-size: 12px;
            font-family: 'Montserrat-Bold';
            color: ${SiteColors.lightGray};
            transition: all 0.5s ease;
            text-align: center;
        }

        .title-img{
            width: 70px;
            height: 80px;
            height: auto;
            margin-bottom: 15px;
        }

        &.bluetooth{
            grid-column-start: 2;
            grid-row-start: 3;
        }
        &.logs{
            grid-column-start: 2;
            grid-row-start: 4;
        }
        &.safety{
            grid-column-start: 4;
            grid-row-start: 2;
        }
        &.congestion{
            grid-column-start: 4;
            grid-row-start: 3;
        }
        &.everywhere{
            grid-column-start: 4;
            grid-row-start: 4;
        }

        .container{
            position: relative;
            width: 220px;
            height: 220px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.5s ease;
            .active-background{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: ${SiteColors.activeGreen};
                transform: scale(0);
                z-index: -1;
                transition: all 0.5s ease;
                &.active{
                    transform: scale(1);
                }
            }
            .title.active{
                color: black;
            }
            &:hover{
                transform: scale(1.1);
            }
        }

        &:hover{
            cursor: pointer;
        }
    }

`

const StyledSecondaryHeader = styled(SecondaryHeader)`
    word-break: break-all;
    line-height: 30px;
    line-height: 90px;
    width: 100px;
`


class WhyGo extends Component {
    constructor(props) {
        super(props)
        this.onServiceClick = this.onServiceClick.bind(this)
        this.switchServices = this.switchServices.bind(this)
        this.state = {
            services: ['congestion', 'everywhere', 'bluetooth', 'logs', 'safety'],
            descriptions: [CongestionDesc, EverywhereDesc, BluetoothDesc, LogsDesc, SafetyDesc],
            serviceImages: [CongestionImg, EverywhereImg, BluetoothImg, LogsImg, SafetyImg],
            activeService: 'safety',
            activeImg: SafetyImg,
            activeDesc: SafetyDesc,
            intervalId: null,
            currentCount: 0,
            activePhone: false
        }
    }
    componentDidMount() {
        var intervalId = setInterval(this.switchServices, 3000);
        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        this.clearInterval()
    }

    componentDidUpdate(prevProps) {
        const href = this.props.location ? this.props.location.href : ''
        if (!this.state.activePhone && href.indexOf('why-go') > -1) {
            this.setState({ activePhone: true })
        }

        if (this.state.activePhone && href.indexOf('banner') > -1) {
            this.setState({ activePhone: false })
        }
    }

    clearInterval() {
        clearInterval(this.state.intervalId);
    }

    switchServices() {
        const { currentCount, services, descriptions, serviceImages } = this.state
        if (currentCount > services.length - 1) {
            this.setState({
                currentCount: 1,
                activeService: 'congestion',
                activeDesc: CongestionDesc,
                activeImg: CongestionImg
            });
        } else {
            this.setState({
                currentCount: this.state.currentCount + 1,
                activeService: services[currentCount],
                activeDesc: descriptions[currentCount],
                activeImg: serviceImages[currentCount]
            });
        }
    }

    onServiceClick(option) {
        let activeImg = null
        let activeDesc = null
        this.clearInterval()
        switch (option) {
            case 'bluetooth':
                activeImg = BluetoothImg
                activeDesc = BluetoothDesc
                break;
            case 'logs':
                activeImg = LogsImg
                activeDesc = LogsDesc
                break;
            case 'safety':
                activeImg = SafetyImg
                activeDesc = SafetyDesc
                break;
            case 'congestion':
                activeImg = CongestionImg
                activeDesc = CongestionDesc
                break;
            case 'everywhere':
                activeImg = EverywhereImg
                activeDesc = EverywhereDesc
                break;
            default:
                break;
        }
        this.setState({ activeService: option, activeImg, activeDesc });
    }


    render() {
        const { activeService, activeDesc, activeImg, activePhone } = this.state
        return (
            <ScrollableAnchor id={"why-go"}>
                <Container>
                    <div className="background-circle"></div>
                    <div className="header">
                        <SecondaryHeader className="why">WHY <span className="mobile-header">GO</span></SecondaryHeader>
                        <StyledSecondaryHeader className="go">GO</StyledSecondaryHeader>
                        <p className="description">Go is a mobile application that allows you to travel faster,
                            smarter and happier by connecting you with your environment.
                            Introducing a fresh, exciting and innovative way for you to
                        connect with your access points.
                        </p>
                    </div>
                    <div className={`phone ${activePhone && 'active'}`}>
                        <img src={PhoneImg} alt="cellphone" className="phoneImg" />
                        <div className={`phone-content ${activePhone && 'active'}`}>>
                            <div className="icon-container">
                                <img src={activeImg} alt="" />
                            </div>
                            <div className="description">
                                <p>{activeDesc}</p>
                            </div>
                            <div className="phone-nav">
                                <div onClick={() => this.onServiceClick('bluetooth')}>
                                    <img src={SmBluetoothImg} className={`title-img ${activeService === 'bluetooth' && 'active'}`} alt="" />
                                </div>
                                <div onClick={() => this.onServiceClick('logs')}>
                                    <img src={SmLogsImg} className={`title-img ${activeService === 'logs' && 'active'}`} alt="" />
                                </div>
                                <div onClick={() => this.onServiceClick('safety')}>
                                    <img src={SmSafetyImg} className={`title-img ${activeService === 'safety' && 'active'}`} alt="" />
                                </div>
                                <div onClick={() => this.onServiceClick('congestion')}>
                                    <img src={SmCongestionImg} className={`title-img ${activeService === 'congestion' && 'active'}`} alt="" />
                                </div>
                                <div onClick={() => this.onServiceClick('everywhere')}>
                                    <img src={SmEverywhereImg} className={`title-img ${activeService === 'everywhere' && 'active'}`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="selection-block bluetooth" onClick={() => this.onServiceClick('bluetooth')}>
                        <div className="container">
                            <div className={`active-background ${activeService === 'bluetooth' && 'active'}`}></div>
                            <img src={BluetoothImg} alt="" className="title-img" />
                            <p className={`title ${activeService === 'bluetooth' && 'active'}`}>Bluetooth Technology</p>
                        </div>
                    </div>
                    <div className="selection-block logs" onClick={() => this.onServiceClick('logs')}>
                        <div className="container">
                            <div className={`active-background ${activeService === 'logs' && 'active'}`}></div>
                            <img src={LogsImg} alt="" className="title-img" />
                            <p className={`title ${activeService === 'logs' && 'active'}`}>Logs of entery <br /> &amp; <br /> exit times</p>
                        </div>
                    </div>
                    <div className="selection-block safety" onClick={() => this.onServiceClick('safety')}>
                        <div className="container">
                            <div className={`active-background ${activeService === 'safety' && 'active'}`}></div>
                            <img src={SafetyImg} alt="" className="title-img" />
                            <p className={`title ${activeService === 'safety' && 'active'}`}>Increased Safety</p>
                        </div>
                    </div>
                    <div className="selection-block congestion" onClick={() => this.onServiceClick('congestion')}>
                        <div className="container">
                            <div className={`active-background ${activeService === 'congestion' && 'active'}`}></div>
                            <img src={CongestionImg} alt="" className="title-img" />
                            <p className={`title ${activeService === 'congestion' && 'active'}`}>Decreased congestion</p>
                        </div>
                    </div>
                    <div className="selection-block everywhere" onClick={() => this.onServiceClick('everywhere')}>
                        <div className="container">
                            <div className={`active-background ${activeService === 'everywhere' && 'active'}`}></div>
                            <img src={EverywhereImg} alt="" className="title-img" />
                            <p className={`title ${activeService === 'everywhere' && 'active'}`}>Go Goes everywhere</p>
                        </div>
                    </div>
                </Container>
            </ScrollableAnchor>
        )
    }
}

export default WhyGo
