import { configureStore } from '@reduxjs/toolkit';
import {persistStore,persistReducer,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './reducer';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

export const store = configureStore({
    reducer: {
        phonebook: persistReducer(persistConfig, phonebookReducer),
    },
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };