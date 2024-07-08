const { Link } = ReactRouterDOM

// import { ContactPreview } from './ContactPreview.jsx'

export function ContactList({ contacts, onRemoveContact, onEditContact }) {

    if (!contacts) return <div>Loading...</div>
    return (
        <ul className="contact-list">
            {contacts.map((contact) => (
                <li className="contact-preview" key={contact._id}>
                    {/* <ContactPreview contact={contact} /> */}
                    <div>
                        <button onClick={() => onRemoveContact(contact._id)}>x</button>
                        <button onClick={() => onEditContact(contact)}>Edit</button>
                    </div>
                    {/* <Link to={`/${contact._id}`}>Details</Link> */}
                </li>
            ))
            }
        </ul >
    )
}
