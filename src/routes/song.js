const express = require('express')
const router = express.Router()
const songController = require('../app/controllers/SongController')

router.get('/:songId', songController.getAllSong)



module.exports = router;