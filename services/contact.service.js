
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'contactDB'

_createContacts()

export const contactService = {
    query,
    getById,
    save,
    remove,
    getDefaultFilter,
    getEmptyContact
}


function query(filterBy = {}) {
    if (!filterBy.name) filterBy.name = ''
    const regExp = new RegExp(filterBy.name, 'i')
    return storageService.query(STORAGE_KEY)
        .then(contacts => {
            return contacts.filter(contact =>
                regExp.test(contact.name)
            )
        })
}


function getById(contactId) {
    return storageService.get(STORAGE_KEY, contactId)
}

function remove(contactId) {
    return storageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
    if (contact._id) {
        return storageService.put(STORAGE_KEY, contact)
    } else {
        return storageService.post(STORAGE_KEY, contact)
    }
}

function getDefaultFilter() {
    return { name: ''}
}


function getEmptyContact() {
    return {
        name: 'Muki',
        tel: '890',
    }
}




function _createContacts() {
    let contacts = utilService.loadFromStorage(STORAGE_KEY)
    if (!contacts || !contacts.length) {
        contacts = [
            {
                name: "Puki",
                tel: 32544,
                _id: "1NF1N1T3"
            },
            {
                name: "Muki",
                tel: 53464634,
                _id: "1NF1N1T4"
            },
            {
                name: "Kuki",
                tel: 6636344,
                _id: "1NF1N1T5"
            },
            {
                name: "Luki",
                tel: 634636434,
                _id: "1NF1N1T6"
            },
        ]
        utilService.saveToStorage(STORAGE_KEY, contacts)
    }



}
