import { saveContact } from "../store/actions/contact.actions.js"

export function ContactEdit({ contact }) {


    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target[0].value

        const tel = event.target[1].value

        const contactToSave = { ...contact, tel, name };
        console.log('contactToSave', contactToSave)
        saveContact(contactToSave);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <input type="text" name="tel" />
                <button type="submit">save</button>
            </form>
        </section>
    )
}

