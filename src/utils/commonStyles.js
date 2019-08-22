import styled from 'styled-components'
import mediaQuery from './mediaQuery'
import { SiteColors } from './constants'

export const PrimaryHeader = styled.h1`
    font-size: 16vw;
    font-family: 'Montserrat-ExtraBold';
    color: ${SiteColors.green};
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1;
    ${mediaQuery.tablet`
        font-size: 95px;
    `}
    ${mediaQuery.desktop`
        font-size: 110px;
    `}
    &.shadow{
        text-shadow: -7px 4px ${SiteColors.textShadow};
    }
`

export const SecondaryHeader = styled.h1`
    font-size: 14vw;
    font-family: 'Montserrat-ExtraBold';
    color: ${SiteColors.darkGreen};
    text-transform: uppercase;
    line-height: 1;

    ${mediaQuery.tablet`
        font-size: 70px;
        `}
    ${mediaQuery.desktop`
        font-size: 85px;
        `}
    ${mediaQuery.large`
        font-size: 95px;
    `}
`

export const SubHeader = styled.h2`
    font-size: 35px;
    color: ${SiteColors.lightGreen};
    font-family: 'Montserrat-Bold';
    text-transform: uppercase;
`

export const ErrorText = styled.p`
    color: ${SiteColors.red};
    font-size: 12px;
    margin-top: 5px;
`

export const DownloadLink = styled.a`
    /* background-image: linear-gradient(to right, ${SiteColors.darkBack} , ${SiteColors.darkBack}); */
    background: ${SiteColors.darkBack};
    border: 1px solid ${SiteColors.green};
    border-radius: 10px;
    padding: 10px 15px;


    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    text-transform: uppercase;
    text-align: right;
    margin-bottom: 10px;
    transition: all 0.5s ease;

    img{
        width: 15px;
    }

    h3{
        font-size: 10px;
        color: white;
        font-family: 'Montserrat-Light';
    }
    p{
        color: ${SiteColors.lightGreen};
        padding-bottom: 5px;
        font-size: 8px;
        font-family: 'Montserrat-Bold';
    }

    ${mediaQuery.tablet`
        width: 200px;
        img{
            width: 20px;
        }
        h3{
            font-size: 14px;
        }
        p{
            font-size: 12px;
        }
    `}

    &:hover{
        cursor: pointer;
        background: ${SiteColors.darkGreen};
    }

`
