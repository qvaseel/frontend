interface ITelegramIcon {
    styleFill: React.CSSProperties;
    styleStroke: React.CSSProperties;
}

const TelegramIcon = ({styleFill, styleStroke}: ITelegramIcon) => {
    return (
        <>
            <svg className="transition-transform transition-color duration-300 ease-in-out hover:rotate-360" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" style={styleFill}/>
                <path d="M25.2 11.342L22.4951 25.463C22.4951 25.463 22.1166 26.4421 21.077 25.9726L14.8361 21.0173L14.8072 21.0027C15.6502 20.2189 22.1871 14.1324 22.4728 13.8565C22.9151 13.4292 22.6405 13.1749 22.127 13.4976L12.4711 19.8477L8.74585 18.5497C8.74585 18.5497 8.15961 18.3337 8.10321 17.8642C8.04607 17.3939 8.76514 17.1395 8.76514 17.1395L23.9518 10.9701C23.9518 10.9701 25.2 10.4021 25.2 11.342V11.342Z" style={styleStroke}/>
            </svg>
        </>    
    )
}

export default TelegramIcon;