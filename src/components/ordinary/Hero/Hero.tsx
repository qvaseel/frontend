import illustration from "../../../img/backs/illustration.webp"
import airplane from "../../../img/backs/airplane.webp"
import message from '../../../img/backs/message.webp'
import { motion } from "framer-motion"
import "./Hero.css"

const textAnimation = {
    hidden: {
        x: -400,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    }
}

const imageAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    }
}

const Hero = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            className="flex w-full justify-between h-[591px] max-lg:h-[500px] max-sm:h-[400px]">
            <div className="max-w-xl max-lg:max-w-md pt-2">
                <motion.h1 variants={textAnimation} className="font-bold text-7xl max-lg:text-6xl max-sm:text-5xl max-[360px]:text-4xl text-white font-oswald leading-[100%] mb-10  max-[360px]:mb-6">Автоматизируем малый и средний бизнес</motion.h1>
                <p className="font-normal text-[23px] text-white mb-14 max-sm:text-[18px] max-[360px]:mb-10">Разработка ERP и маркетплейсов</p>
                <div className="hero_link w-fit">
                    <a className="overflow-hidden w-full bg-white text-[17px] font-medium px-8 py-3 rounded-full max-[360px]:text-[12px]" href="#">Обсудить проект</a>
                </div>
            </div>
            <div className="relative h-[84%] flex flex-col items-center">
                <motion.img variants={imageAnimation} className="w-full my-auto max-[904px]:hidden" src={illustration} alt="" />
                <div className="absolute left-2 -top-4 max-lg:hidden">
                    <img className="w-28" src={airplane} alt="" />
                </div>
                <div className="absolute -left-16 bottom-14 max-lg:hidden">
                    <img className="w-20" src={message} alt="" />
                </div>
            </div>
        </motion.div>
    )
}

export default Hero;