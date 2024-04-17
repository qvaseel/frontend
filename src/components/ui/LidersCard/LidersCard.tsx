import { motion } from "framer-motion"

interface ILidersCard {
    img: any;
    name: string;
    lastname: string;
    position: TrustedHTML;
}

const LidersCard = ({img, name, lastname, position}: ILidersCard) => {
    return (
        <motion.div
            className="flex flex-col w-48 items-center"
        >
            <motion.img
                whileHover={{
                    border: 'none',
                    scale: 1.04
                }}
                transition={{
                    ease:'linear',
                    duration: 0.3
                }}
                className="object-cover w-48 h-48 rounded-full border-[5px] border-[#624AFF] mb-3" src={img} alt="lider_photo"
            />
            <p className="text-center text-[17px] font-bold text-[#1F1F1F] mb-2">
                <span className="text-[#624AFF]">{name}</span> {lastname}
            </p>
            <p className="text-center text-[15px] font-normal text-[#4D4D4D] w-[172px] leading-[18px]" dangerouslySetInnerHTML={{__html: position}}/>
        </motion.div>
    )
}

export default LidersCard;