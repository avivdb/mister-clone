import { contactService } from '../services/contact.service.js'
// import { ContactList } from '../cmps/ContactList.jsx'

const { useState, useEffect } = React

export function ContactIndex() {
    const [contacts, setContacts] = useState(null)

    useEffect(() => {
        loadContacts()
    }, [])

    function loadContacts() {
        contactService.query().then(setContacts)
    }

    function onRemoveContact(contactId) {
        contactService
            .remove(contactId)
            .then(() => {
                console.log('Deleted Succesfully!')
                const contactsToUpdate = contacts.filter((contact) => contact._id !== contactId)
                setContacts(contactsToUpdate)

            })
            .catch((err) => {
                console.log('Error from onRemoveContact ->', err)

            })
    }

    function onAddContact() {
        const contact = {
            name: prompt('Contact Name?'),
            tel: +prompt('Contact Tel?'),
        }
        contactService
            .save(contact)
            .then((savedContact) => {
                console.log('Added Contact', savedContact)
                setContacts([...contacts, savedContact])

            })
            .catch((err) => {
                console.log('Error from onAddContact ->', err)

            })
    }

    function onEditContact(contact) {
        const severity = +prompt('New severity?')
        const contactToSave = { ...contact, severity }
        contactService
            .save(contactToSave)
            .then((savedContact) => {
                console.log('Updated Contact:', savedContact)
                const contactsToUpdate = contacts.map((currContact) =>
                    currContact._id === savedContact._id ? savedContact : currContact
                )
                setContacts(contactsToUpdate)

            })
            .catch((err) => {
                console.log('Error from onEditContact ->', err)

            })
    }

    return (
        <main>
            <section className='info-actions'>
                <h3>Contacts App</h3>
                <button onClick={onAddContact}>Add Contact 👤</button>
            </section>
            <main>
                {/* <ContactList contacts={contacts} onRemoveContact={onRemoveContact} onEditContact={onEditContact} /> */}
            </main>
        </main>
    )
}
