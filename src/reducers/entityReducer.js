import { createSlice } from '@reduxjs/toolkit';
import QRCode from 'qrcode';
import entityService from '../services/entity';

const slice = createSlice({
    name: 'entity',
    initialState: null,
    reducers: {
        setEntity(state, action) {
            return action.payload;
        },
        clearEntity(state, action) {
            return null;
        }
    }
});

export const { setEntity, clearEntity } = slice.actions;

export const generateShortUrl = originUrl => {
    return async dispatch => {
        const shortUrl = await entityService.shortUrl(originUrl);
        const qrcode = await QRCode.toDataURL(shortUrl, {
            errorCorrectionLevel: 'H',
            version: 4,
            type: 'image/jpeg',
            rendererOpts: {
                quality: 1
            }
        });
        dispatch(setEntity({
            originUrl,
            shortUrl,
            qrcode
        }))
    }
}

export default slice.reducer;