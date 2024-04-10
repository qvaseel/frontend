interface ITitle {
    children: React.ReactNode;
}

const Title = ({children}: ITitle) => {
    return (
        <>
            <h2 className="font-inter font-bold text-4xl">{children}</h2>
        </>
    )
}

export default Title;