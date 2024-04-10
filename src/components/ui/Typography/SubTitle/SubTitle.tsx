import "./SubTitle.css"

interface ISubTitle {
    children: TrustedHTML;
}

const SubTitle = ({children}: ISubTitle) => {
    const text = children;
    return (
        <>
            <p className="font-inter font-normal text-[17px] text-[#4D4D4D]" dangerouslySetInnerHTML={{__html: text}}/>
        </>
    )
}

export default SubTitle;