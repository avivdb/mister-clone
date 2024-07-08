import { contactService } from '../services/contact.service.js'
import { loadContacts, removeContact, saveContact } from '../store/actions/contact.actions.js'


import { ContactList } from '../cmps/ContactList.jsx'

const { useState, useEffect } = React
const { useSelector } = ReactRedux


export function ContactIndex() {
    const contacts = useSelector(storeState => storeState.contacts)

    const [filterBy, setFilterBy] = useState(contactService.getDefaultFilter())

    useEffect(() => {
        loadContacts(filterBy)
            .catch(err => {
                console.log('err:', err)

            })
    }, [filterBy])

    function onSetFilter(filterBy) {
        console.log('filterBy:', filterBy)
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    function onRemoveContact(contactId) {
        removeContact(contactId)
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onAddContact() {
        const contactToSave = contactService.getEmptyContact()
        saveContact(contactToSave)

            .catch(err => {
                console.log('Cannot add contact', err)
            })
    }

    function onEditContact(contact) {
        const tel = prompt('New tel?')
        const contactToSave = { ...contact, tel }

        saveContact(contactToSave)

            .catch(err => {
                console.log('Cannot update contact', err)
            })
    }


    return (
        <main>
            <section className='info-actions'>
                <h3>Contacts App</h3>
                <button onClick={onAddContact}>Add Contact 👤</button>
            </section>
            <main>
                <ContactList contacts={contacts} onRemoveContact={onRemoveContact} onEditContact={onEditContact} />
            </main>
        </main>
    )
}
