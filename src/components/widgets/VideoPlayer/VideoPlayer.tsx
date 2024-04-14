import "./VideoPlayer.css"
import Layout from "../../Layout/Layout";
import { Player } from 'video-react';
import video from "../../../img/video.png"
import play from "../../../img/play.svg"

interface IVideoPlayer {
    sec: string;
}

const VideoPlayer = ({sec}: IVideoPlayer) => {
    return (
        <div className="relative">
                <div className="bg-black bg-opacity-50 rounded-full text-white text-base px-4 py-2 absolute z-40 top-6 left-6
                                max-[900px]:text-sm max-sm:text-xs max-sm:top-4 max-sm:left-4 max-[500px]:text-[8px] max-[500px]:px-2 max-[500px]:py-1 max-[500px]:top-2 max-[500px]:left-2">
                    Время просмотра {sec} секунд
                </div>
                <div className="videoControlsPlay">
                    <img src={play} alt="" />
                </div>
                <img src={video} className="relative w-full rounded-[36px]"/>
        </div>
    )
}

export default VideoPlayer;