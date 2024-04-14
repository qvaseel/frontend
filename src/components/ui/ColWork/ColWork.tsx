import CardWork from "../CardWork/CardWork";

interface IColWork {
    startIndex: number;
    enum_works: { img: string; name: string }[];
}

const ColWork = ({startIndex, enum_works}: IColWork) => {
    return (
        <div className='w-full flex flex-col gap-5 grow sm:w-1/3 lg:w-1/4'>
            {[0, 1, 2].map(cardIndex => {
                const index = startIndex + cardIndex;
                if (index < enum_works.length) {
                    const work = enum_works[index];
                    return <CardWork key={index} img={work.img} name={work.name} />;
                }
                return null;
            })}
        </div>
    )
}

export default ColWork;