const express = require('express')
const router = express.Router()
const present = require('../app/controllers/PresentController')

router.get('/',present.getAll)

module.exports = router;
