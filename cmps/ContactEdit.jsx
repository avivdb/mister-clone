import { saveContact } from "../store/actions/contact.actions.js"

export function ContactEdit({ contact, setEditContactId }) {


    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target[0].value
        const tel = event.target[1].value
        const contactToSave = { ...contact, tel, name }

        saveContact(contactToSave)
        setEditContactId(null)
    }

    return (
        <section className="contact-edit">
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" />
                <label>Tel:</label>
                <input type="text" name="tel" />
                <button type="submit">save</button>
            </form>
        </section>
    )
}

