import Layout from "../../Layout/Layout"
import Title from "../../ui/Typography/Title/Title"
import { enum_awards } from "../../../types/awards"

const Awards = () => {
    return (
        <Layout id="awards">
            <Title>
                Наши награды
            </Title>
            <div className="flex gap-8 flex-wrap ">
                {enum_awards.map((item, index) => (
                    <img key={index} src={item.img}/>
                ))}
            </div>
        </Layout>
    )
}

export default Awards;