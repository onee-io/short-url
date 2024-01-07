import axios from "axios";

/**
 * 生成短链接
 * @param {string} url 原始链接
 * @returns 短链接
 */
const shortUrl = async url => {
    const res = await axios.post('/url', { url });
    return res.data;
}

export default { shortUrl };