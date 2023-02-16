import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearEntity, generateShortUrl } from "../reducers/entityReducer";
import { clearError, setError } from "../reducers/errorReducer";
import Button from "./Button";
import Error from "./Error";

const Search = () => {
    const dispatch = useDispatch();
    const [url, setUrl] = useState('');
    // 处理按键事件
    const handleClick = () => {
        dispatch(clearError());
        dispatch(clearEntity());
        if (!/^((https|http)?:\/\/)[^\s]+/.test(encodeURI(url))) {
            dispatch(setError('URL 格式有误，请输入 http:// 或 https:// 开头的网址'));
        } else {
            dispatch(generateShortUrl(url));
            setUrl('');
        }
    }
    // 监听回车事件
    const handleKeyup = (event) => {
        if (event.keyCode === 13) {
            handleClick();
        }
    }
    return (
        <div className="mb-10">
            <div className="flex">
                <input
                    className="outline-none flex-1 mr-4 px-5 py-3 rounded-lg font-mono text-lg text-black bg-yellow-100 bg-opacity-80 placeholder-yellow-900 placeholder-opacity-30"
                    placeholder="请输入 http:// 或 https:// 开头的网址"
                    value={url}
                    onChange={({ target }) => setUrl(target.value)}
                    onKeyUp={handleKeyup}
                />
                <Button label=")缩(" onClick={handleClick} />
            </div>
            <Error />
        </div>

    );
}

export default Search;