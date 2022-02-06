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

// import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
// export const store = configureStore({
//     reducer: {
//         phonebook: persistReducer(persistConfig, phonebookReducer),
//     },
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [
//                     FLUSH,
//                     REHYDRATE,
//                     PAUSE,
//                     PERSIST,
//                     PURGE,
//                     REGISTER,
//                 ],
//             },
//         }),
//     devTools: process.env.NODE_ENV === 'development',
// });

// прослойка  middleware для google analitics
//const gaMd = store => next =>  action {
// console.log(' ', action);
// if (action.meta && action.meta.ga) {
//     //...отправляем в аналитику
// }
//next (action);
// };
// const a ={
//     type: 'todo/add',
//     payload: '5',
//     meta: {
//     ga: true,
//         },
    
// };
