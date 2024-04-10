import arrow_down from "../../../img/arrow_down.svg"

const ArrowDown = () => {
    return (
        <div className="w-full py-6">
            <a href="#" className="w-8 block mx-auto ">
                <img className="animate-bounce" src={arrow_down} alt="" />
            </a>
        </div>
    )
}

export default ArrowDown;