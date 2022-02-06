import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './components.module.css';
import { addContact } from './../redux/actions';
import { getContacts } from './../redux/selectors';

function Form() {
    const allContacts = useSelector(getContacts);
    const dispatch = useDispatch();
    const [newContact, setNewContact] = useState({ name: '', number: '' });
    const { name, number } = newContact;

    const handleChange = event => {
        const { name, value } = event.target;
        setNewContact({
            ...newContact,
            [name]: value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        allContacts.find(
            el => el.name.toLowerCase() === normalizedValue(newContact.name),
        )
            ? notify(`${newContact.name} is already in contact`)
            : dispatch(addContact(newContact));

        setNewContact({ name: '', number: '' });
    };

    const normalizedValue = value => {
        return value.toLowerCase();
    };

    const notify = message =>
        toast(message, {
            position: toast.POSITION.TOP_CENTER,
            className: s.toast,
        });

    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

    return (
        <div>
            <form onSubmit={handleSubmit} className={s.form}>
                <label htmlFor={nameInputId} className={s.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        id={nameInputId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. 
                            Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label htmlFor={numberInputId} className={s.label}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        id={numberInputId}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button type="submit" className={s.add_button}>
                    Add contact
                </button>
            </form>
        </div>
    );
}

export default Form;