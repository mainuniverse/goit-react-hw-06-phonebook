import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from './../redux/selectors';
import { deleteContact } from './../redux/actions';
import s from './components.module.css';

const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    const onDelete = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <ul className={s.list}>
            {contacts?.map(({ id, name, number }) => (
                <li key={id} className={s.item}>
                    <p>
                        {name}: {number}
                    </p>
                    <button
                        type="button"
                        onClick={() => onDelete(id)}
                        className={s.btn_delete}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;