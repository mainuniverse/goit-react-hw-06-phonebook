export const getFilter = state => state.phonebook.filter;
export const getContacts = state => state.phonebook.contacts;

export const getVisibleContacts = state => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    const normalizedValue = value => value.toLowerCase();

    return contacts.filter(contact =>
        normalizedValue(contact.name).includes(normalizedValue(filter)),
    );
};