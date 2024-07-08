const { Link } = ReactRouterDOM
const { useState } = React

import { ContactPreview } from '../cmps/ContactPreview.jsx'
import { ContactEdit } from './ContactEdit.jsx'

export function ContactList({ contacts, onRemoveContact }) {
    const [editContactId, setEditContactId] = useState(null)

    if (!contacts) return <div>Loading...</div>

    const toggleEdit = (contactId) => {
        if (editContactId === contactId) {
            setEditContactId(null)
        } else {
            setEditContactId(contactId)
        }
    };

    return (
        <ul className="contact-list">
            {contacts.map((contact) => (
                <li className="contact-preview" key={contact._id}>
                    <ContactPreview contact={contact} />
                    <button><Link to={`/${contact._id}`}>Details</Link></button>
                    <div>
                        <button onClick={() => onRemoveContact(contact._id)}>Delete</button>
                        <button onClick={() => toggleEdit(contact._id)}>Edit</button>
                        {editContactId === contact._id && <ContactEdit contact={contact} setEditContactId={setEditContactId}/>}
                    </div>
                </li>
            ))}
        </ul>
    );
}
