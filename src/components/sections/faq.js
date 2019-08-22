import React from 'react'
import styled from 'styled-components'
import useCollapse from "react-collapsed";
import ScrollableAnchor from "react-scrollable-anchor";

import { SiteColors, PhoneSectionPadding, TabletSectionPadding, DesktopSectionPadding } from '../../utils/constants'
import mediaQuery from '../../utils/mediaQuery'

const FAQ_CONTENT = [
    {
        question: "How do I download Go Access?",
        answer: "Go is available on both the Google Play Store for Android, as well as the Apple App Store. Alternatively, you can use the download links provided on our website."
    },
    {
        question: "How do I register?",
        answer: "Once you have downloaded the Go App successfully, you will be required to enter your cell phone number to gain access. You will be sent an OTP (One-Time-Pin) which you will need to enter to finalise your registration process."
    },
    {
        question: "How does it work?",
        answer: "Go uses Bluetooth technology to connect to your access points. Please ensure that your Bluetooth is enabled when using Go to enter or exit your estate, complex or office park."
    },
    {
        question: "Can I use Go at any estate or office park?",
        answer: "Security is our main priority. You will only be able to use Go once you have been granted access by your estate or office manager. Additionally, ensure that Go is installed at your estate or office park first, before trying to open your access points."
    },
    {
        question: "How do I get Go installed at my estate or office park?",
        answer: "We’re glad you asked! Contact us at hello@goaccess.co.za or phone us and we’ll come to your estate or office park and demo how it works. We take pride in keeping our demonstrations short, yet sweet!"
    },
    {
        question: "How can I find out more about this service?",
        answer: "Please contact us at your most convenient time and we’ll be sure to clear up any questions you might have regarding our solution. Contact us at hello@goaccess.co.za or contact us directly telephonically."
    },
    {
        question: "How much data is required to download Go?",
        answer: "To download the Go app will require anywhere between 6MB – 35MB. But don’t worry, this is pretty much all the data which will be used once downloaded. Go uses Bluetooth, this means no airtime and no data is required to open your access points."
    },
]

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: ${PhoneSectionPadding};
    background: ${SiteColors.darkBack};
    color: white;

    ${mediaQuery.tablet`
        padding: ${TabletSectionPadding};
    `}
    ${mediaQuery.desktop`
        padding: ${DesktopSectionPadding};
    `}

    .collapse-wrapper{
        margin-bottom: 20px;
    }
`
const CollapseTitle = styled.div`
    background: ${SiteColors.lightGray2};
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    

    h3{
        color: ${SiteColors.green};
        text-transform: uppercase;
        line-height: 25px;
        font-size: 14px;
        font-family: 'Montserrat-Bold';
        ${mediaQuery.tablet`
            font-size: 16px;
        `}
    }

    .arrow{
        transition: transform 0.2s ease;
        &.active{
            transform: rotate(90deg);
        }
    }

    &:hover{
        cursor: pointer;
    }
`

const CollapseContent = styled.div`
    background: ${SiteColors.darkGray2};

    .content{
        padding: 30px 20px;
        line-height: 25px;
        font-size: 14px;
    }
`
function Collapse(props) {
    const collapseProps = useCollapse(props);
    return props.children(collapseProps);
}

const faq = () => {
    return (
        <ScrollableAnchor id="faq">
            <Container>
                {
                    FAQ_CONTENT.map((obj, index) => (
                        <div className="collapse-wrapper" key={index}>
                            <Collapse key={index} className="collapse">
                                {({ getToggleProps, getCollapseProps, isOpen }) => (
                                    <>
                                        <CollapseTitle {...getToggleProps()}>
                                            <h3>{obj.question}</h3>
                                            <i className={`material-icons arrow ${isOpen && 'active'}`}>
                                                arrow_forward
                                            </i>
                                        </CollapseTitle>
                                        <CollapseContent {...getCollapseProps()}>
                                            <div className="content">
                                                {obj.answer}
                                            </div>
                                        </CollapseContent>
                                    </>
                                )}
                            </Collapse>
                        </div>
                    ))
                }
            </Container>

        </ScrollableAnchor>
    )
}

export default faq
