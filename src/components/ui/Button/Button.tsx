interface IButton {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// function Animation() {
//     this.classList.toggle('active')
// }

const Button = ({onClick, children}: IButton) => {
    return (
        <button className="hidden max-[904px]:block" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;