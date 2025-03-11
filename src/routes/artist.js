const express = require('express')
const router = express.Router()
const artistController = require('../app/controllers/ArtistController')


router.get('/:artistId', artistController.getAllArtistSong)
router.get('/', artistController.getAllArtist)
//router.get('/artistsong', artistController.getAllArtistSong)

module.exports = router;