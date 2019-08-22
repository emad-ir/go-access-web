import { css } from 'styled-components'

const sizes = {
    phone: 576,
    tablet: 768,
    desktop: 992,
    desktop2: 1100,
    large: 1200,
    xlarge: 1600,
}


const media = Object.keys(sizes).reduce((finalMedia, size) => {
    return {
        ...finalMedia,
        [size]: function (...args) {
            return css`
                @media(min-width: ${sizes[size]}px){
                    ${css(...args)}
                }
            `
        }
    }
}, {})

export default media