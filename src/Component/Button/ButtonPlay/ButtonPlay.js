import React from 'react'
import "./ButtonPlay.css"

function ButtonPlay() {
    return (
        <div className="wrapper-play-btn mt-2">
            <button className="video-play-btn"><i className="fas fa-play"></i></button>
            <span className="text-center">Play Demo</span>
        </div>
    )
}

export default ButtonPlay
