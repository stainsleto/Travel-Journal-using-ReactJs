import React from 'react'
import Globe from '../images/globe.png'
import '../index.css'

export default function Header() {
    return(
        <div className="header">
            <div>
            <img src={Globe} />
            </div>

            <div>
                <p id="header-text">mytraveljournal</p>
            </div>
        </div>
    )
}

