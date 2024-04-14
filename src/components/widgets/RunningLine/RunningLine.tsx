import "./RunningLine.css"
import { enum_line } from "../../../types/runningLine";
import Marquee from "react-fast-marquee";

const RunningLine = () => {
    return (
        <Marquee direction="right" pauseOnHover>
          {enum_line.map((img, index) => {
                return (<img key={index} className="h-12 w-auto mx-12" src={img.img} alt="" />)
            })}
        </Marquee>

    )
}

export default RunningLine;