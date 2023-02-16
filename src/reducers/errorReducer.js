import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'error',
    initialState: '',
    reducers: {
        setError(state, action) {
            return action.payload;
        },
        clearError(state, action) {
            return ''; 
        }
    }
});

export const { setError, clearError } = slice.actions;

export default slice.reducer;