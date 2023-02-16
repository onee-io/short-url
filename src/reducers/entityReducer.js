import { createSlice } from '@reduxjs/toolkit';
import QRCode from 'qrcode';
import entityService from '../services/entity';
import copy from 'copy-to-clipboard';
import { setError } from './errorReducer';

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
        try {
            const res = await entityService.shortUrl(originUrl);
            const shortUrl = `${window.location.origin}/${res.code}`;
            const qrcode = await QRCode.toDataURL(shortUrl, { errorCorrectionLevel: 'H' });
            dispatch(setEntity({
                originUrl,
                shortUrl,
                qrcode,
                code: res.code
            }));
            copy(shortUrl);
        } catch (error) {
            dispatch(setError(error.message));
        }
    }
}

export default slice.reducer;