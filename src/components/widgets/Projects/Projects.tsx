import "./Projects.css"
import ColWork from "../../ui/ColWork/ColWork";
import DOMPurify from 'dompurify';
import Layout from "../../Layout/Layout";
import TitleSection from "../../ui/Typography/TitleSection/TitleSection";
import { enum_works } from '../../../types/works';

const text = {
    textTitle: "Наши последние проекты",
    textSubTitle: "Чтобы <span>просмотреть</span> все работы <span>свяжитесь</span> с нашем <span>менеджером</span>"
}

const Projects = () => {
    const textProps = DOMPurify.sanitize(text.textSubTitle)
    return (
        <Layout>
            <TitleSection
                textTitle={text.textTitle}
                textSubTitle={textProps}/>
                <div className='flex justify-between gap-5 max-[1200px]:flex-wrap'>
                    {[0, 3, 6, 9].map((startIndex, index) => (
                        <ColWork key={index} startIndex={startIndex} enum_works={enum_works} />
                    ))}
                </div>
        </Layout>
    )
}

export default Projects;