import copy from 'copy-to-clipboard';
import { saveAs } from 'file-saver';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';

const Entity = () => {
    const [showCopyed, setShowCopyed] = useState(false);
    const entity = useSelector(state => state.entity);
    if (!entity) {
        return null;
    }
    // 下载二维码事件
    const handleDownload = async () => {
        const res = await fetch(entity.qrcode);
        const blob = await res.blob();
        saveAs(blob, `QRCode_${entity.code}.png`);
    }
    // 复制短链接事件
    const handleCopy = () => {
        copy(entity.shortUrl);
        setShowCopyed(true);
        setTimeout(() => setShowCopyed(false), 3000);
    }
    return (
        <div className="flex">
            <img className="w-40 h-40 mr-10 rounded-lg" src={entity.qrcode} alt="QRCode" />
            <div className="flex-1 relative">
                <p className="font-bold text-xl font-mono">
                    短链接：<a className="underline" href={entity.shortUrl} target="_blank" rel="noopener noreferrer">{entity.shortUrl}</a>
                </p>
                <p className="mt-4 text-xl font-mono font-light">
                    原链接：<a className="underline" href={entity.originUrl} target="_blank" rel="noopener noreferrer">{entity.originUrl}</a>
                </p>
                <div className="absolute left-0 bottom-0">
                    <div className="inline-block mr-3">
                        <Button label="下载二维码" onClick={handleDownload} />
                    </div>
                    <div className="inline-block mr-5">
                        <Button label="复制短链接" onClick={handleCopy} />
                    </div>
                    {showCopyed &&
                        <div className="inline-block h-5 leading-5 font-mono">
                            <svg className='inline-block w-5 h-5 mr-1 align-top' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 9L9.99998 16L6.99994 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            已复制
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Entity;