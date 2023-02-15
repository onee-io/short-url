import { useState } from "react";
import { useDispatch } from "react-redux";
import { generateShortUrl } from "../reducers/entityReducer";
import Button from "./Button";

const Search = () => {
    const dispatch = useDispatch();
    const [url, setUrl] = useState('');
    // 处理按键事件
    const handleClick = () => dispatch(generateShortUrl(url));
    return (
        <div className="flex mb-10">
            <input
                className="outline-none flex-1 mr-4 px-5 py-3 rounded-lg font-mono text-lg text-black bg-yellow-100 bg-opacity-80 placeholder-yellow-900 placeholder-opacity-30"
                placeholder="请输入 http:// 或 https:// 开头的网址"
                value={url}
                onChange={({ target }) => setUrl(target.value)}
            />
            <Button label=")缩(" onClick={handleClick} />
        </div>
    );
}

export default Search;