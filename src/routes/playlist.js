const express = require('express')
const router = express.Router()
const playlistController = require('../app/controllers/PlaylistController')

router.get('/:playlistId', playlistController.getAllPlaylistSong)
router.get('/', playlistController.getAllPlaylist)


module.exports = router;