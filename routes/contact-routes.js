const express = require('express')
const {getContacts} = require("../controllers/contact-controller");
const router = express.Router()

router.get('/contact', getContacts)

module.exports = router
