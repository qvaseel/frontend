interface ICardWork {
    img: string;
    name: string;
}

const CardWork = ({img, name}: ICardWork) => {
    return (
        <div className='w-full h-full relative rounded-3xl flex flex-col grow max-[639px]:h-[200px]'>
            <img className='w-full h-full rounded-3xl max-[639px]:object-cover' src={img} />
            <div className='w-full h-full absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-60 rounded-3xl'></div>
            <div className="w-full h-full text-center absolute text-2xl max-sm:text-xl text-white font-bold flex items-center justify-center">
                {name}
            </div>
        </div>
    )
}

export default CardWork;