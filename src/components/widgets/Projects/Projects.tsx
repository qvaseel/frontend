import DOMPurify from 'dompurify';
import Layout from "../../Layout/Layout";
import TitleSection from "../../ui/Typography/TitleSection/TitleSection";

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
        </Layout>
    )
}

export default Projects;