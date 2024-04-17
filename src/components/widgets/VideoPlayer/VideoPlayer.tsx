import "./VideoPlayer.css"
import video from "../../../img/video.png"
import play from "../../../img/play.svg"
import React, { useRef } from 'react';

interface IVideoPlayer {
    sec: string;
}

const VideoPlayer = ({sec}: IVideoPlayer) => {
    const videoPlayerRef = useRef<HTMLVideoElement>(null);
    function playVideo() {
        if (videoPlayerRef.current) {
            videoPlayerRef.current.play();
        }
    }
    return (
        <div className="relative">
            <div className="bg-black bg-opacity-50 rounded-full text-white text-base px-4 py-2 absolute z-40 top-6 left-6
                            max-[900px]:text-sm max-sm:text-xs max-sm:top-4 max-sm:left-4 max-[500px]:text-[8px] max-[500px]:px-2 max-[500px]:py-1 max-[500px]:top-2 max-[500px]:left-2">
                Время просмотра {sec} секунд
            </div>
            <button id="videobtn" className="videoControlsPlay"onClick={playVideo}>
                <img src={play} alt="" />
            </button>
            <video ref={videoPlayerRef} id="videoplayer" className="w-full rounded-[20px]" poster={video} controls>
                <source src="" type="video/mp4"/>
            </video>
        </div>
    )
}

export default VideoPlayer;