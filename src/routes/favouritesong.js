const express = require('express');
const router = express.Router();
const favouritesongController = require('../app/controllers/FavouritesongController');

router.get('/', favouritesongController.getAllFavouriteSongs);
// Định nghĩa các route khác

module.exports = router;
