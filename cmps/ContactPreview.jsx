
export function ContactPreview({ contact }) {

    return (
        <section className="contact-preview">
            <h1>👤</h1>
            <p>Name: <span>{contact.name}</span></p>
            <p>Tel: <span>{contact.tel}</span></p>
        </section>
    )
}