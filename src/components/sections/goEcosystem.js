import React from 'react'
import styled from "styled-components"
import ScrollableAnchor from "react-scrollable-anchor";

// Utils
import { SiteColors, TabletSectionPadding, DesktopSectionPadding } from '../../utils/constants'
import { SecondaryHeader } from '../../utils/commonStyles'
import { rotate } from '../../utils/animation'
import mediaQuery from '../../utils/mediaQuery'

// images
import HomeImg from '../../images/eco_system_guest.svg'
import OfficeImg from '../../images/eco_system_office.svg'
import MallImg from '../../images/eco_system_mall.svg'
import GoBackImg from '../../images/go_g.svg'

const Container = styled.section`
    margin-top: 50px;
    display: grid;
    grid-template-columns: ${TabletSectionPadding} 1fr 1fr ${TabletSectionPadding};
    grid-template-rows: repeat(4, auto);
    background: url(${GoBackImg});
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;

    ${mediaQuery.tablet`
        background-size: cover;
        background-position: initial;
    `}

    ${mediaQuery.desktop`
        margin-top: 150px;
        grid-template-columns: ${DesktopSectionPadding} 1fr 1fr ${DesktopSectionPadding};
        grid-template-rows: 1fr 1fr;
    `}


    .header{
        grid-column-start: 2;
        grid-column-end: 4;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto;
        z-index: 2;

        ${mediaQuery.tablet`
            grid-template-columns: 10% 25% 270px auto;
        `}


        .go{
            grid-column-start: 1;
            grid-column-end: 3;
        }
        .eco{
            grid-row-start: 2;
            grid-column-start: 1;
            grid-column-end: 3;
        }
        .system{
            grid-row-start: 3;
            grid-column-start: 1;
            grid-column-end: 3;
        }

        ${mediaQuery.tablet`
            .system{
                grid-column-end: 4;
            }
        `}

        ${mediaQuery.desktop`
            grid-column-start: 2;
            grid-column-end: 3;
            .eco{
                grid-column-end: 4;
            }
        `}

        .eco-container{
            grid-column-start: 3;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 3;
            justify-self: flex-end;

            position: relative;
            margin-left: 50px;
            width: 100px;
            height: 100px;
            margin-top: -40px;

            ${mediaQuery.tablet`
                width: 230px;
                height: 220px;
                margin-top: 0px;
            `}
            ${mediaQuery.desktop`
                grid-column-end: 4;

            `}

            &:before{
                z-index: -1;
                content: '';
                position: absolute;
                left: 0;
                top: 20px;
                width: 90px;
                height: 90px;
                border: 3px dashed black;
                border-radius: 50%;
                animation: ${rotate} 60s linear infinite;
                ${mediaQuery.tablet`
                    width: 180px;
                    height: 180px;
                `}
            }

            > div{
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;

                &.home{
                    top: 0px;
                    left: 26px;
                    ${mediaQuery.tablet`
                        top: -15px;
                        left: 70px;
                    `}
                }
                &.office{
                    bottom: 0;
                    right: -10px;
                    bottom: -45px;

                    ${mediaQuery.tablet`
                        right: 25px;
                        bottom: 10px;
                    `}

                }
                &.mall{
                    bottom: 0;
                    left: -10px;
                    bottom: -45px;
                    ${mediaQuery.tablet`
                        bottom: 10px;
                        left: -10px;
                    `}
                }

                img{
                    width: 40px;
                    height: auto;
                    ${mediaQuery.tablet`
                        width: 50px;
                    `}
                }
                p{
                    text-transform: uppercase;
                    padding-top: 10px;
                    font-size: 14px;
                    font-weight: bold;
                    color: ${SiteColors.green};
                    font-family: 'Montserrat-Bold';
                }
            }

        }
    }

    .experience{
        grid-row-start: 2;
        grid-column-start: 1;
        grid-column-end: 5;
        padding: 20px 0px;
        z-index: 2;

        ${mediaQuery.desktop`
            grid-column-start: 3;
            grid-column-end: 5;
            grid-row-start: 1;
        `}

        display: flex;
        align-items: center;
        .background{
            width: 100%;
            height: 70%;
            background: ${SiteColors.green};
            padding: 50px;

            display: flex;
            align-items: center;
            justify-content: center;

            p{
                font-size: 16px;
                line-height: 30px;
                text-align: center;
                color: ${SiteColors.darkGreen};
            }

            ${mediaQuery.desktop`
                padding-right: 100px;
                padding-left: 50px;
                p{
                    text-align: right;
                }
            `}
        }
    }
    
    .content-block{
        align-self: flex-start;
        padding: 50px 0px;

        ${mediaQuery.desktop`
            margin-top: 80px;
            padding: 0px;
        `}

        .title{
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            h2{
                margin-left: 20px;
                text-transform: uppercase;
                font-family: 'Montserrat-Bold';
                color: ${SiteColors.green};
            }

            &.right{
                justify-content: flex-end;
                text-align: right;
                h2{
                    margin-right: 20px;
                }
            }

            img{
                width: 45px;
            }
        }

        .description {
            &.right{
                text-align: right; 
            }
            p{
                font-size: 16px;
                line-height: 22px;
                color: ${SiteColors.darkGreen};
            }
        }
        &.residential{
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row-start: 3;

            ${mediaQuery.desktop`
                grid-column-start: 2;
                grid-column-end: 3;
                grid-row-start: 2;
                padding-right: 100px;
            `}
        }
        &.guest{
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row-start: 4;

            ${mediaQuery.desktop`
                grid-column-start: 3;
                grid-row-start: 2;
                padding-left: 100px;
            `}
        }
    }
`

const GoEcosystem = () => (
    <ScrollableAnchor id="go-eco">
        <Container>
            <div className="header">
                <SecondaryHeader className="go">Go</SecondaryHeader>
                <SecondaryHeader className="eco">Eco</SecondaryHeader>
                <SecondaryHeader className="system">System</SecondaryHeader>
                <div className="eco-container">
                    <div className="home">
                        <img src={HomeImg} alt="" className="home" />
                        <p>Home</p>
                    </div>
                    <div className="office">
                        <img src={OfficeImg} alt="" className="office" />
                        <p>Office</p>
                    </div>
                    <div className="mall">
                        <img src={MallImg} alt="" className="mall" />
                        <p>Mall</p>
                    </div>
                </div>
            </div>
            <div className="experience">
                <div className="background">
                    <p>Experience true freedom with our Go-Ecosystem, which connects all your favourite places and gives you full control. Go will allow you to travel safely to and from your home, office and favourite shopping malls effortlessly. Freedom has never felt so good. </p>
                </div>
            </div>
            <div className="content-block residential">
                <div className="title">
                    <img src={OfficeImg} alt="Office Eco System" />
                    <h2>Residential states  <br /> and office parks</h2>
                </div>
                <div className="description">
                    <p>Go offers a unique solution which allows you to enter and exit your access points by simply tapping your phone screen through our mobile app. Clients will have access to use the Go-Dashboard which will be tailored to their specific needs and gives them full control to easily manage tenant and employee entry and exit. </p>
                </div>
            </div>
            <div className="content-block guest">
                <div className="title right">
                    <h2>Guest <br />Management</h2>
                    <img src={HomeImg} alt="Guest Eco System" />
                </div>
                <div className="description right">
                    <p>Go Guest Management offers tenants full control as to who they want to invite. Guests will no longer have to wait endlessly at the entry points, but will be welcomed with open booms. Visiting family and friends just became a whole lot easier. </p>
                </div>
            </div>
        </Container>
    </ScrollableAnchor>
)

export default GoEcosystem
