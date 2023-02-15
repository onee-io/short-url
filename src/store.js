import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {

    }
});

console.log('state  =>', store.getState());

export default store;