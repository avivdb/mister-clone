const { useState, useEffect } = React
const { Link, useParams } = ReactRouterDOM

import { contactService } from '../services/contact.service.js'


export function ContactDetails() {

    const [contact, setContact] = useState(null)
    const { contactId } = useParams()

    useEffect(() => {
        contactService.getById(contactId)
            .then(contact => {
                setContact(contact)
            })
            .catch(err => {
                console.log('err', err)
            })
    }, [])

    if (!contact) return <h1>loadings....</h1>
    return contact && <div className="contact-details">
        <h3>Contact Details</h3>
        <h3>👤</h3>
        <h4>{contact.name}</h4>
        <p>Tel: <span>{contact.tel}</span></p>
        <button><Link to="/">Back to List</Link></button>
    </div>

}

