import { useSelector } from 'react-redux';
import Button from './Button';

const Entity = () => {
    const entity = useSelector(state => state.entity);
    if (!entity) {
        return null;
    }
    return (
        <div className="flex">
            <img className="w-40 h-40 mr-10" src={entity.qrcode} alt="QRCode" />
            <div className="flex-1 relative">
                <p className="font-bold text-xl font-mono">
                    短链接：<a className="underline" href={entity.shortUrl}>{entity.shortUrl}</a>
                </p>
                <p className="mt-4 text-xl font-mono font-light">
                    原链接：<a className="underline" href={entity.originUrl}>{entity.originUrl}</a>
                </p>
                <div className="absolute left-0 bottom-0">
                    <div className="inline-block mr-3">
                        <Button label="下载二维码" onClick={() => console.log('下载二维码')} />
                    </div>
                    <Button label="复制短链接" onClick={() => console.log('复制短链接')} />
                </div>
            </div>
        </div>
    );
}

export default Entity;