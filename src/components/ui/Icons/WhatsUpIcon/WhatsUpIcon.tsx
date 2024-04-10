interface IWhatsUpIcon {
    styleFill: React.CSSProperties;
    styleStroke: React.CSSProperties;
}

const WhatsUpIcon = ({styleFill, styleStroke}: IWhatsUpIcon) => {
    return (
        <>
            <svg className="transition-transform transition-color duration-300 ease-in-out hover:rotate-360" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" style={styleFill}/>
                <path d="M25.1341 10.8562C23.3561 9.08437 20.9854 8.1 18.4829 8.1C13.2805 8.1 9.06585 12.3 9.06585 17.4844C9.06585 19.125 9.52683 20.7656 10.3171 22.1437L9 27L14.0049 25.6875C15.3878 26.4094 16.9024 26.8031 18.4829 26.8031C23.6854 26.8031 27.9 22.6031 27.9 17.4187C27.8341 14.9906 26.9122 12.6281 25.1341 10.8562ZM23.0268 20.8312C22.8293 21.3562 21.9073 21.8812 21.4463 21.9469C21.0512 22.0125 20.5244 22.0125 19.9976 21.8812C19.6683 21.75 19.2073 21.6187 18.6805 21.3562C16.3098 20.3719 14.7951 18.0094 14.6634 17.8125C14.5317 17.6812 13.6756 16.5656 13.6756 15.3844C13.6756 14.2031 14.2683 13.6781 14.4659 13.4156C14.6634 13.1531 14.9268 13.1531 15.1244 13.1531C15.2561 13.1531 15.4537 13.1531 15.5854 13.1531C15.7171 13.1531 15.9146 13.0875 16.1122 13.5469C16.3098 14.0062 16.7707 15.1875 16.8366 15.2531C16.9024 15.3844 16.9024 15.5156 16.8366 15.6469C16.7707 15.7781 16.7049 15.9094 16.5732 16.0406C16.4415 16.1719 16.3098 16.3687 16.2439 16.4344C16.1122 16.5656 15.9805 16.6969 16.1122 16.8937C16.2439 17.1562 16.7049 17.8781 17.4293 18.5344C18.3512 19.3219 19.0756 19.5844 19.339 19.7156C19.6024 19.8469 19.7341 19.7812 19.8659 19.65C19.9976 19.5187 20.4585 18.9937 20.5902 18.7312C20.722 18.4687 20.9195 18.5344 21.1171 18.6C21.3146 18.6656 22.5 19.2562 22.6976 19.3875C22.961 19.5187 23.0927 19.5844 23.1585 19.65C23.2244 19.8469 23.2244 20.3062 23.0268 20.8312Z" style={styleStroke}/>
            </svg>
        </>    
    )
}

export default WhatsUpIcon;