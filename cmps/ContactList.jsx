const { Link } = ReactRouterDOM

import { ContactPreview } from '../cmps/ContactPreview.jsx'
import { ContactEdit } from './ContactEdit.jsx'

export function ContactList({ contacts, onRemoveContact }) {

    if (!contacts) return <div>Loading...</div>
    return (
        <ul className="contact-list">
            {contacts.map((contact) => (
                <li className="contact-preview" key={contact._id}>
                    <ContactPreview contact={contact} />
                    <div>
                        <button onClick={() => onRemoveContact(contact._id)}>x</button>
                        {/* <button onClick={() => onEditContact(contact)}>Edit</button> */}
                        <ContactEdit contact={contact} />
                    </div>
                    <Link to={`/${contact._id}`}>Details</Link>
                </li>
            ))
            }
        </ul >
    )
}
