import "./BlockDir.css"
import CardDescr from "../Typography/CardDescr/CardDescr"

interface IBlockDir {
    title: string,
    descr: TrustedHTML
}

const BlockDir = ({title, descr}: IBlockDir) => {
    return(
        <div className="w-[386px] bg-[#F8F8F8] rounded-3xl p-6 flex flex-col gap-4">
            <span className="px-4 py-1 text-[14px] text-[#624AFF] bg-[#624AFF] bg-opacity-10 rounded-full w-fit">{title}</span>
            <CardDescr text={descr} className="dir"/>
        </div>
    )
}

export default BlockDir;