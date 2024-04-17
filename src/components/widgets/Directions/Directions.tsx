import DOMPurify from 'dompurify';
import Layout from "../../Layout/Layout"
import TitleSection from "../../ui/Typography/TitleSection/TitleSection";
import CardDir from '../../ui/CardDir/CardDir';
import BlockDir from '../../ui/BlockDir/BlockDir';
import { enum_directions_cards } from '../../../types/directions';
import { enum_directions_blocks } from '../../../types/directions';
import { motion } from 'framer-motion';

const text = {
    textTitle: "Наши направления",
    textSubTitle: "Работаем на серверах заказчика и оказываем услуги <span>полноценной подготовки</span><br> проекта, соответствующего <span>всем критериям</span> нативной программной разработки"
}

const cardsAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

const Directions = () => {
    const textProps = DOMPurify.sanitize(text.textSubTitle)
    return (
        <Layout id='directions'>
            <TitleSection
                textTitle={text.textTitle}
                textSubTitle={textProps}/>
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 1.2,
                    delay: 0.1
                }}
                variants={cardsAnimation}
                className='flex justify-between overflow-x-auto gap-5 pb-3'
            >
                {enum_directions_cards.map((item, index) => (
                    <CardDir
                        key={index}
                        id={item.id}
                        title={item.title}
                        descr={item.descr}
                        className={item.style}
                    />
                ))}
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 1,
                    delay: 0.3
                }}
                variants={cardsAnimation}
                className='flex justify-between overflow-x-auto gap-5 pb-3 flex-wrap max-[1295px]:flex-nowrap'
            >
                {enum_directions_blocks.map((item, index)=> (
                    <BlockDir
                        key={index}
                        title={item.title}
                        descr={DOMPurify.sanitize(item.descr)}
                    />
                ))}
            </motion.div>
        </Layout>
    )
}

export default Directions;