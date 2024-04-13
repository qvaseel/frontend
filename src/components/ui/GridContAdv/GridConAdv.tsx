import "./style.css"
import DOMPurify from 'dompurify';
import { enum_advantages } from "../../../types/advantages";
import CardAdv from '../CardAdv/CardAdv';
import CardDescr from '../Typography/CardDescr/CardDescr';

const GridContAdv = () => {
    return (
        <div className="grid gap-5 grid-cols-12 max-[910px]:flex flex-col">
            <CardAdv className="card1 col-span-12">
                <p className="text-[22px] font-semibold leading-[32px]">{enum_advantages[0].title}</p>
                <p className="text-base leading-[22px] max-w-[780px]">{enum_advantages[0].descr}</p>
            </CardAdv>
            <CardAdv className="card2 col-span-5 h-[405px] max-[910px]:h-auto">
                <p className="text-[22px] font-semibold leading-[32px]">{enum_advantages[1].title}</p>
                <CardDescr className="adv" text={DOMPurify.sanitize(enum_advantages[1].descr)}/>
            </CardAdv>
            <CardAdv className="card3 col-span-7">
                <p className="text-[22px] font-semibold leading-[32px]">{enum_advantages[2].title}</p>
                <CardDescr className="adv" text={DOMPurify.sanitize(enum_advantages[2].descr)}/>
            </CardAdv>
        </div>
    )
}

export default GridContAdv;