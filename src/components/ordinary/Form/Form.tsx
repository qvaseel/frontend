import { SubmitHandler, useForm } from "react-hook-form";
import "./Form.css"
import clip from "../../../img/clip.svg"

interface IForm {
    name: string;
    phone: string;
    email: string;
    message: string;
}

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}}
         = useForm<IForm>({
        defaultValues:{

        }
    })

    const submit: SubmitHandler<IForm> = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submit)} className="w-[613px] p-9 max-md:p-2 flex flex-col border gap-5 max-sm:gap-3 rounded-xl max-[1050px]:w-[450px] max-md:w-auto">
            <p className="text-base max-sm:text-sm text-[#4D4D4D] bg-[#F9F9F9] border-[#F0F0F0] py-3 px-4 rounded-xl">Свяжитесь с нами и получите расчет стоимости проекта в течении суток.</p>
            <input className={errors.name ? "input errors" : "input"} type="text" placeholder="Ваше имя" {...register('name', {required: true})}/>
            <input className={errors.name ? "input errors" : "input"} type="tel" placeholder="+7 (___) ___-__-__" {...register('phone', {required: true})}/>
            <input className={errors.name ? "input errors" : "input"} type="email" placeholder="E-mail" {...register('email', {required: true})}/>
            <textarea className={errors.name ? "textarea errors" : "textarea"} placeholder="О проекте" {...register('message', {required: true})}/>
            <div className="flex gap-[6px] items-center cursor-pointer">
                <img src={clip}/>
                <p className="text-base text-[#525252]">Прикрепить файл</p>
            </div>
            <input className="w-[145px] px-8 py-3 text-[17px] font-medium text-white bg-[#624AFF] rounded-full" type="submit" value="Написать" />
        </form>
    )
}

export default Form;