import React from 'react'
import './videoPopup.css'
import ReactPlayer from 'react-player'
function VideoPopup(url) {
    console.log(url.url)
    return (
        <div className='videoPopUpBox'>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${url.url}`}
                controls
                width="100%"
                height="100%"

            />
        </div>
    )
}

export default VideoPopup