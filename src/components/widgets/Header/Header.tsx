import Navpanel from "../../ordinary/Navpanel/Navpanel";
import Hero from "../../ordinary/Hero/Hero";
import back from "../../../img/backs/headerbg.webp";
import ArrowDown from "../../ui/ArrowDown/ArrowDown";


const Header = () => {
    return (
        <div className="relative font-inter">
            <div className="absolute top-0 left-0 right-0 -z-100 h-[87%] ">
                <img src={back} alt="image for background" className="w-full h-full object-cover object-bottom"  />
            </div>
            <header className="px-10 relative max-w-7xl mx-auto my-0 w-full min-h-[909px] flex flex-col justify-between max-sm:px-4 max-lg:min-h-[700px] max-sm:min-h-[500px]">
                <Navpanel/>
                <Hero/>
                <ArrowDown/>
            </header>
        </div>
    )
}

export default Header;