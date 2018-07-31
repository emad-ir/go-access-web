import React from 'react'
import Link from 'gatsby-link'

import Ir_logo from '../../images/ir_created_by.png'

const footer = () => (
    <div className="footer">
        <a href="http://www.infinitereality.co.za" target="_blank">
            <img src={Ir_logo} alt="Created by Infite Reality" />
        </a>
    </div>
)

export default footer
