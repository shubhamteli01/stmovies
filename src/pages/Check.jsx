import React from 'react'
import './check.css'
import PosterFallback from "../assets/no-poster.png";

function Check() {
    return (
        <div className='check'>
            <div class="card">
                <img src={PosterFallback}></img>
            </div>
        </div>
    )
}

export default Check