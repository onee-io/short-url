import { configureStore } from '@reduxjs/toolkit';
import entityReducer from './reducers/entityReducer';

const store = configureStore({
    reducer: {
        entity: entityReducer
    }
});

console.log('state  =>', store.getState());

export default store;