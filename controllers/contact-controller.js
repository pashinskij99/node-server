const Contact = require('../models/contact')
const createPath = require('../helpers/create-path')

const getContacts = (req, res) => {
    const title = 'Contact'
    Contact
        .find()
        .then((contact) => res.render(createPath('contact'), {contact, title}))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error'), {title: 'Error'})
        })
}

module.exports = {
    getContacts
}
