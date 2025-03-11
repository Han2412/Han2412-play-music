const Favouritesong = require('../models/Favouritesong');

const FavouritesongController = {
  getAllFavouriteSongs: (req, res) => {
    Favouritesong.getAll((err, songs) => {
      if (err) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
      } else {
        res.render('favouritesong', { favouritesong });
      }
    });
  },
  // Các hàm xử lý khác cho controller
};

module.exports = FavouritesongController;