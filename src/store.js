import { configureStore } from '@reduxjs/toolkit';
import entityReducer from './reducers/entityReducer';
import errorReducer from './reducers/errorReducer';

const store = configureStore({
    reducer: {
        entity: entityReducer,
        error: errorReducer
    }
});

export default store;