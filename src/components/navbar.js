import React, { Component } from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import { goToAnchor } from 'react-scrollable-anchor'

// Utils
import { SiteColors, TabletSectionPadding, DesktopSectionPadding } from '../utils/constants'
import mediaQuery from '../utils/mediaQuery'

// images
import Logo from "../images/logo.png"


const Header = styled.header`
    display: grid;
    grid-template-columns: ${TabletSectionPadding} auto auto ${TabletSectionPadding};
    align-items: center;
    height: 60px;
    width: 100vw;
    z-index: 1;
    transition: background 0.5s ease;

    position: fixed;
    top: 0;
    left:0;

    &.active{
        z-index: 40;
        background: ${SiteColors.darkBack};
        -webkit-box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.3);
    }

    ${mediaQuery.desktop`
        grid-template-columns: ${DesktopSectionPadding} auto auto ${DesktopSectionPadding};
    `}

    .logo-link{
        grid-column-start: 2;
        .logo{
            width: auto;
            height: 40px;
            transition: height 0.5s ease;

            &.active{
                height: 30px;
            }
        }
    }

    .desktop-links{
        display: none;
        ${mediaQuery.desktop`
            display: block;
        `}
    }

    .menu-toggle{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: white;

        i{
            font-size: 28px;
        }
        ${mediaQuery.desktop`
            display: none;
        `}

        &:hover{
            cursor: pointer;
        }
    }
`

const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    ${mediaQuery.desktop`
        flex-direction: row;
    `}
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;
    padding: 20px;
    font-size: 12px;

    ${mediaQuery.desktop`
        padding: 15px;
        justify-content: flex-start;
    `}

    .material-icons{
        font-size: 14px;
        margin-right: 5px;
        color: ${SiteColors.green};
    }

    &.active{
        color:  ${SiteColors.green};
    }
`

const MobileNav = styled.div`
    display: block;
    height: 100vh;
    width: 100vw;
    background: ${SiteColors.darkGreen};
    
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    position: fixed;
    top: -100vh;
    left: 0;
    z-index: 30;
    transition: top 0.5s ease;

    > * {
        align-self:center;
        justify-self: center;
    }

    .logo{
        width: auto;
        height: 40px;
    }

    .nav-footer{
        i{
            color: ${SiteColors.lightGreen};
            font-size: 50px;
        }
    }

    &.active{
        top: 0;
    }

    ${mediaQuery.desktop`
        display: none;
    `}
`

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.handleActive = this.handleActive.bind(this)
        this.state = {
            mobileNav: false,
            theposition: 0,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height

        this.setState({
            theposition: scrolled,
        })
    }


    renderNavLinks() {
        const href = this.props.location && this.props.location.href ? this.props.location.href : ''
        return (
            <Links>
                <StyledLink to="/#why-go" onClick={() => this.handleActive('why-go')} className={href.indexOf('why-go') > -1 && 'active'}>
                    <span className="material-icons">favorite</span>
                    Why Go
                </StyledLink>

                <StyledLink to="/#go-green" onClick={() => this.handleActive('go-green')} className={href.indexOf('go-green') > -1 && 'active'}>
                    <span className="material-icons">spa</span>
                    Go-Green
                </StyledLink>

                <StyledLink to="/#go-eco" onClick={() => this.handleActive('go-eco')} className={href.indexOf('go-eco') > -1 && 'active'}>
                    <span className="material-icons">bubble_chart</span>
                    Go-Ecosystem
                </StyledLink>

                <StyledLink to="/#faq" onClick={() => this.handleActive('faq')} className={href.indexOf('faq') > -1 && 'active'}>
                    <span className="material-icons">help</span>
                    FAQs
                </StyledLink>

                <StyledLink to="/#contact" onClick={() => this.handleActive('contact')} className={href.indexOf('contact') > -1 && 'active'}>
                    <span className="material-icons">perm_phone_msg</span>
                    Book a Demo
                </StyledLink>

                <StyledLink to="/terms" activeClassName="active">
                    <span className="material-icons">remove_red_eye</span>
                    Privacy
                </StyledLink>
            </Links>
        )
    }

    handleActive(activeLink) {
        goToAnchor(activeLink, true)
        this.setState({ mobileNav: !this.state.mobileNav })
    }


    render() {
        const { mobileNav, theposition } = this.state
        return (
            <div>
                <Header className={theposition > 0 && 'active'}>
                    <Link to="/#banner" className="logo-link" onClick={() => this.handleActive('banner')}>
                        <img src={Logo} className={`logo ${theposition > 0 && 'active'}`} alt="Go Access Logo" />
                    </Link>

                    <div className="desktop-links">
                        {this.renderNavLinks()}
                    </div>

                    <div className="menu-toggle" onClick={this.handleActive}>
                        <i className="material-icons">
                            menu
                        </i>
                    </div>
                </Header>
                <MobileNav className={mobileNav && 'active'}>
                    <img src={Logo} className="logo" alt="Go Access Logo" />

                    <div className="links">
                        {this.renderNavLinks()}
                    </div>

                    <div className="nav-footer" onClick={this.handleActive}>
                        <i className="material-icons">
                            close
                        </i>
                    </div>
                </MobileNav>
            </div>
        )
    }
}

export default Navbar
