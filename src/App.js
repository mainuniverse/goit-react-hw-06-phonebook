import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.css';
import Container from './components/Container';
import ContactList from './components/ContactList';
import Form from './components/Form';
import Filter from './components/Filter';

function App() {
    return (
        <Container>
            <div >
                <div className={s.phonebook}>
                    <h1>Phonebook</h1>
                    <Form />
                </div>
                <div className={s.contacts}>
                    <h2>Contacts</h2>
                    <Filter />

                    <ContactList />
                    <ToastContainer />
                </div>
            </div>
        </Container>
    );
}

export default App;
