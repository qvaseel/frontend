import { useState } from "react";
import Logo from "../../ui/Icons/Logo/Logo";
import Nav from "../Nav/Nav";
import Social from "../Social/Social";
import Button from "../../ui/Button/Button";
import MenuIcon from "../../ui/Icons/MenuIcon/MenuIcon";

const Navpanel = () => {
    const [isOpen, setOpen] = useState(false);
    function Close() {
        setOpen(!isOpen)
    }
    return (
        <nav className="h-24 w-full flex justify-between items-center text-[17px]">
            <Logo fill="white"/>
            <Nav isOpen={isOpen}/>       
            <Social/>
            <Button onClick={() => Close()}><MenuIcon isOpen={isOpen}/></Button>
        </nav>
    )
}

export default Navpanel;