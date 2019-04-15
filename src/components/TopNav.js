import React from 'react'
import Link from 'gatsby-link'
import GoLogo from '../../images/logo-nav.png'

const TopNav = () => {
    return (
        <div className="top-nav">
            <Link to="/"><img src={GoLogo} alt="Go Logo" className="logo" /></Link>
        </div>
    )
}

export default TopNav