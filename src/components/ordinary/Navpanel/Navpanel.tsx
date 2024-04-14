import { useState } from "react";
import Logo from "../../ui/Icons/Logo/Logo";
import Nav from "../Nav/Nav";
import Social from "../Social/Social";
import Button from "../../ui/Button/Button";
import MenuIcon from "../../ui/Icons/MenuIcon/MenuIcon";
import "./Navpanel.css"

const Navpanel = () => {
    const [isOpen, setOpen] = useState(false);
    const btn = document.getElementById('btn')
    var c = 1;

    function Close() {
        setOpen(!isOpen)
        
    }
    return (
        <nav className="h-24 w-full flex justify-between items-center text-[17px]">
            <Logo fill="white"/>
            <Nav isOpen={isOpen}/>       
            <Social/>
            <Button id="btn" className={`hidden max-[921px]:block right-0 z-50 mr-10 ${isOpen ? "pos_fix" : "pos_abs"} `} onClick={() => Close()}><MenuIcon isOpen={isOpen}/></Button>
        </nav>
    )
}

export default Navpanel;