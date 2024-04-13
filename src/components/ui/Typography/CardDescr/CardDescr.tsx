import "./CardDescr.css"

interface ICardDescr {
    text: TrustedHTML;
    className: string;
}

const CardDescr = ({text, className}: ICardDescr) => {
    return (
        <div className={`${className}`} dangerouslySetInnerHTML={{__html: text}}/>
    )
}

export default CardDescr;