import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { addContact, deleteContact, changeFilter } from './actions';
import { defaultContacts } from './defaultContacts';

const contactsReducer = createReducer(defaultContacts, {
    [addContact]: (state, { payload }) => {
        return [payload, ...state];
    },
    [deleteContact]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});