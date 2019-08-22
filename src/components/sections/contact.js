import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor from "react-scrollable-anchor";

// Utils
import { SecondaryHeader } from '../../utils/commonStyles'
import { SiteColors, PhoneSectionPadding, TabletSectionPadding, DesktopSectionPadding } from '../../utils/constants'
import { pulse } from '../../utils/animation'
import mediaQuery from '../../utils/mediaQuery'

// images
// import TwIcon from '../../images/icon_tw.svg'
import IgIcon from '../../images/icon_ig.svg'
import FbIcon from '../../images/icon_fb.svg'
import AndroidIcon from "../../images/icon_android.svg"
import AppleIcon from "../../images/icon_apple.svg"

const Container = styled.section`
    position: relative;
    overflow: hidden;
    background: ${SiteColors.darkBack};
    display: grid;
    padding: 50px 0px;
    grid-template-columns: ${PhoneSectionPadding} 1fr 1fr ${PhoneSectionPadding};
    grid-template-rows: auto auto;

    ${mediaQuery.tablet`
        padding-top: 100px;
        grid-template-columns: ${TabletSectionPadding} 1fr 1fr ${TabletSectionPadding};
        grid-template-rows: 100%;
    `}

    ${mediaQuery.desktop`
        grid-template-columns: ${DesktopSectionPadding} 1fr 1fr ${DesktopSectionPadding};
    `}

    

    .form-container{
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 2;
        z-index: 2;
        margin-top: 50px;

        ${mediaQuery.tablet`
            margin-top: 0px;
            grid-column-end: 3;
            grid-row-start: 1;
        `}
        
        form{
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-column-gap: 20px;

            input, textarea{
                width: 100%;
                margin: 0;
                padding: 15px 0px; 
                padding-left: 15px; 
                border: 1px solid black;
                box-sizing: border-box;
                resize: none;
                border-radius: 5px;
                background: ${SiteColors.darkGray};
                color: ${SiteColors.lightGray};
                font-size: 14px;
                &:active, &:focus{
                    outline: none;
                }
            }

            button{
                height: 40px;
                margin-top: 10px;
                background: ${SiteColors.darkGreen};
                border-radius: 5px;
                color: white;
                border-color: ${SiteColors.darkGreen};
                text-transform: uppercase;
                font-weight: bold;
                transition: background 0.2s ease;
                &:hover{
                    cursor: pointer;
                    background: ${SiteColors.green};
                    color: ${SiteColors.darkGreen};
                }
                &:disabled{
                    cursor: not-allowed;
                    background: ${SiteColors.darkGreen};
                    color: white;
                    opacity: 0.7;
                }
            }

            .errorMessage{
                color: red;
            }

            .email{
                grid-column-start: 2;
                grid-column-end: 3;
            }

            .message{
                grid-row-start: 2;
                grid-column-start: 1;
                grid-column-end: 3;
            }

            .submit-btn{
                grid-row-start: 3;
                grid-column-start: 1;
                grid-column-end: 3;
            }
        }

        .successMessage{
            grid-column-start: 1;
            grid-column-end: 3;
            padding: 15px 0px;
            width: 100%;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${SiteColors.green};
            p{
                color: ${SiteColors.darkBack};
            }
        }
    }

    .header{
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 1;

        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        z-index: 2;


        ${mediaQuery.desktop`
            grid-column-start: 3;
        `}

        .title1{
            grid-column-start: 1;
            grid-column-end: 4;
            justify-self: flex-end;
        }
        .title2{
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row-start: 2;

            display: flex;
            align-items: center;
            justify-content: flex-end;

            .contact-info{
                display:flex;
                flex-direction: column;
                justify-self: flex-end;
                text-align: right;
                margin-right: 20px;
                a{
                    font-size: 18px;
                    color: white;
                    line-height: 25px;
                }
            }
        }
        .social{
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 3;

            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;

            .bullet{
                color: ${SiteColors.green};
                font-size: 50px;
            }

            a{
                margin: 0px 10px;

                &:hover{
                    i{
                        color: ${SiteColors.darkGreen};
                    }
                }
            }

            img{
                width: 30px;
            }
        }
    }

    .background-circle {
        background: ${SiteColors.darkGray2};
        width: 300px;
        height: 300px;
        border-radius: 50%;
        position: absolute;
        bottom: -80px;
        right: -100px;
        z-index: 0;
        animation: 3s ${pulse} infinite linear;

        ${mediaQuery.desktop`
            width: 400px;
            height: 400px;
        `}

        ${mediaQuery.large`
            width: 450px;
            height: 450px;
        `}
    }
`

class Contact extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.state = {
            name: "",
            email: "",
            message: "",
            errors: {
                name: "",
                email: "",
                message: "",
            }
        }
    }

    handleInputChange(e) {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        const errors = this.state.errors

        switch (inputName) {
            case 'name':
                if (inputValue === '') {
                    errors['name'] = "This field is required"
                } else {
                    errors['name'] = ""
                }
                this.setState({ name: inputValue, errors: errors })
                break;
            case 'email':
                if (inputValue === '') {
                    errors['email'] = "This field is required"
                } else if (!this.isValidEmail(inputValue)) {
                    errors['email'] = "Please enter a valid email address"
                } else {
                    errors['email'] = ""
                }
                this.setState({ email: inputValue, errors: errors })
                break;
            case 'message':
                if (inputValue === '') {
                    errors['message'] = "This field is required"
                } else {
                    errors['message'] = ""
                }
                this.setState({ message: inputValue, errors: errors })
                break;
            default:
                break;
        }
    }

    isValidEmail(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log("here")
    }

    render() {
        const { name, email, message, errors } = this.state
        const { success } = this.props

        return (
            <ScrollableAnchor id="contact">
                <Container>
                    <div className="form-container">
                        <form action="https://jumprock.co/mail/goaccess" method="post">
                            <div className="name">
                                <input type="text" name="name" placeholder="NAME" onChange={this.handleInputChange} value={name} />
                                {
                                    errors.name !== "" &&
                                    <p className="errorMessage">{errors.name}</p>
                                }
                            </div>
                            <div className="email">
                                <input type="email" name="email" placeholder="EMAIL" onChange={this.handleInputChange} value={email} />
                                {
                                    errors.email !== "" &&
                                    <p className="errorMessage">{errors.email}</p>
                                }
                            </div>
                            <div className="message">
                                <textarea name="message" id="" cols="6" placeholder="MESSAGE" onChange={this.handleInputChange} value={message}></textarea>
                                {
                                    errors.message !== "" &&
                                    <p className="errorMessage">{errors.message}</p>
                                }
                            </div>

                            <input type="hidden" name="after" value="http://localhost:8000/?form=success" readOnly />
                            <input type="text" name="trapit" value="" style={{ 'display': 'none' }} readOnly />
                            <button type="submit" className="submit-btn" disabled={errors.name !== "" || errors.email !== "" || errors.message !== ""}>Send Message</button>
                            {
                                success &&
                                <div className="successMessage">
                                    <p>Thank you for contacting us. We will contact you shortly.</p>
                                </div>
                            }
                        </form>
                    </div>
                    <div className="header">
                        <div className="title1">
                            <SecondaryHeader>Contact</SecondaryHeader>
                        </div>
                        <div className="title2">
                            <div className="contact-info">
                                <a href="mailto:hello@goaccess.co.za">hello@goaccess.co.za</a>
                                <a href="tel:+27827631254">(+27)82 763 1254</a>
                            </div>
                            <SecondaryHeader>Us</SecondaryHeader>
                        </div>
                        <div className="social">
                            <div>
                                <a href="https://apps.apple.com/us/app/go-access/id1445123265?ls=1" target="_top">
                                    <img src={AppleIcon} alt="Apple Icon" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=za.co.goapp&hl=en" target="_top">
                                    <img src={AndroidIcon} alt="Android Icon" />
                                </a>
                            </div>
                            <p className="bullet">•</p>
                            <div>
                                <a href="https://www.facebook.com/GoAccessControl/" target="_top">
                                    <img src={FbIcon} alt="goaccess facebook" />
                                </a>
                                <a href="https://www.instagram.com/goaccessapp/" target="_top">
                                    <img src={IgIcon} alt="goaccess instagram" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="background-circle"></div>
                </Container>
            </ScrollableAnchor>
        )
    }
}

export default Contact
