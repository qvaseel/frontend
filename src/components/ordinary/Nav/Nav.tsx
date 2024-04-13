import "./Nav.css"

const links = [
    {name: 'Портфолио', link: '#'},
    {name: 'Наша команда', link: '#'},
    {name: 'Сервисы', link: '#'},
    {name: 'Контакты', link: '#'}
]

interface INav {
    isOpen: boolean;
}

const Nav = ({isOpen}: INav) => {
    return (
        <ul className={`pt-2 list-none flex justify-between font-normal text-white gap-10 max-lg:gap-3 top-0 max-[904px]:-right-[220px] bottom-0 transition-transform duration-300 ease-linear
            max-[904px]:w-[220px] max-[904px]:px-6 max-[904px]:pt-28 max-[904px]:flex-col max-[904px]:fixed max-[904px]:justify-normal max-[904px]:bg-white max-[904px]:h-screen max-[904px]:text-black z-[15]
            ${isOpen ? "active" : ""}`}>
            {links.map(({name, link}, i) => (
                <li key={i} className="hover:rounded-full hover:border-white hover:border-b px-3 pb-1">
                    <a href={link}>{name}</a>
                </li>
            ))}
        </ul>
    )
}

export default Nav;