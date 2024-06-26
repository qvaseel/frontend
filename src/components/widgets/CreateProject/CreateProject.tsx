import "./CreateProject.css"
import DOMPurify from 'dompurify';
import Layout from "../../Layout/Layout"
import TitleSection from "../../ui/Typography/TitleSection/TitleSection";
import Form from '../../ordinary/Form/Form';
import back from "../../../img/backs/form-bg.webp"

const text = {
    textTitle: "Готовы создать проект?",
    textSubTitle: "<span class='span_purple'>Запишитесь</span> на онлайн встречу с нашим менеджером и получите оценку вашего проекта уже сегодня"
}

const CreateProject = () => {
    const textProps = DOMPurify.sanitize(text.textSubTitle)
    return (
        <Layout id="createProject">
            <TitleSection
                textTitle={text.textTitle}
                textSubTitle={textProps}/>
            <div className="relative ">
                
                <div className='flex justify-between max-[900px]:gap-6 max-md:flex-col-reverse'>
                    <Form/>
                    <div className='flex flex-col gap-4'>
                        <p className='text-xl text-[#1F1F1F] max-md:text-lg'>Позвоним, чтобы <span className='font-bold'>обсудить детали</span></p>
                        <ul className="create_project_ul">
                            <li>Проведем анализ данной работы</li>
                            <li>Обсудим сроки на разработку</li>
                            <li>Определим цели и задачи проекта</li>
                        </ul>
                    </div>
                </div>
                <div className="absolute w-[1458px] right-0 bottom-0 -z-10 hidden lg:flex">
                    <img className="w-full h-full object-contain " src={back} alt="back of form" />
                </div>
            </div>
            
        </Layout>
    )
}

export default CreateProject;