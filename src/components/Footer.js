const Footer = () => {
    return (
        <div className="h-10 text-center text-sm font-mono font-light">
            本站由
            <svg className="inline-block w-4 h-4 mx-1 font-thin" xmlns="http://www.w3.org/2000/svg" fill="#EF3E36" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
            </svg>
            <a className="underline" href="https://github.com/onee-io" target="_blank" rel="noopener noreferrer">onee</a>
            &nbsp;构建｜
            <a className="underline" href="https://github.com/onee-io/short-url" target="_blank" rel="noopener noreferrer">源码</a>
            ｜
            <a className="underline" href="mailto:oneewy@gmail.com">联系站长</a>
        </div>
    );
}

export default Footer;