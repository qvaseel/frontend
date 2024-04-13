interface ILidersCard {
    img: any;
    name: string;
    lastname: string;
    position: TrustedHTML;
}

const LidersCard = ({img, name, lastname, position}: ILidersCard) => {
    return (
        <div className="flex flex-col w-48 items-center">
            <img className="object-cover w-48 h-48 rounded-full border-4 border-[#624AFF] mb-3" src={img} alt="lider_photo" />
            <p className="text-center text-[17px] font-bold text-[#1F1F1F] mb-2">
                <span className="text-[#624AFF]">{name}</span> {lastname}
            </p>
            <p className="text-center text-[15px] font-normal text-[#4D4D4D] w-[172px] leading-[18px]" dangerouslySetInnerHTML={{__html: position}}/>
        </div>
    )
}

export default LidersCard;