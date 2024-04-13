import DOMPurify from 'dompurify';
import Layout from "../../Layout/Layout"
import TitleSection from "../../ui/Typography/TitleSection/TitleSection";

const text = {
    textTitle: "Готовы создать проект?",
    textSubTitle: "<a>Запишитесь</a> на онлайн встречу с нашим менеджером и получите оценку вашего проекта уже сегодня"
}

const CreateProject = () => {
    const textProps = DOMPurify.sanitize(text.textSubTitle)
    return (
        <Layout>
            <TitleSection
                textTitle={text.textTitle}
                textSubTitle={textProps}/>
        </Layout>
    )
}

export default CreateProject;