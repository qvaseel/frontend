interface ILayout {
    children: React.ReactNode;
}

const Layout = ({children}: ILayout) => {
    return (
        <div className="px-10 relative max-w-7xl mx-auto my-0 w-full flex flex-col gap-[52px]">
            {children}
        </div>
    )
}

export default Layout;