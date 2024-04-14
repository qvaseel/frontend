import DOMPurify from 'dompurify';
import Layout from "../../Layout/Layout"
import TitleSection from "../../ui/Typography/TitleSection/TitleSection";
import CardDir from '../../ui/CardDir/CardDir';
import BlockDir from '../../ui/BlockDir/BlockDir';
import { enum_directions_cards } from '../../../types/directions';
import { enum_directions_blocks } from '../../../types/directions';

const text = {
    textTitle: "Наши направления",
    textSubTitle: "Работаем на серверах заказчика и оказываем услуги <span>полноценной подготовки</span><br> проекта, соответствующего <span>всем критериям</span> нативной программной разработки"
}

const Directions = () => {
    const textProps = DOMPurify.sanitize(text.textSubTitle)
    return (
        <Layout id='directions'>
            <TitleSection
                textTitle={text.textTitle}
                textSubTitle={textProps}/>
            <div className='flex w-full justify-around gap-5 flex-wrap'>
                {enum_directions_cards.map((item, index) => (
                    <CardDir
                        key={index}
                        id={item.id}
                        title={item.title}
                        descr={item.descr}
                        className={item.style}
                    />
                ))}
            </div>
            <div className='flex w-full justify-around gap-5 flex-wrap'>
                {enum_directions_blocks.map((item, index)=> (
                    <BlockDir
                        key={index}
                        title={item.title}
                        descr={DOMPurify.sanitize(item.descr)}
                    />
                ))}
            </div>
        </Layout>
    )
}

export default Directions;