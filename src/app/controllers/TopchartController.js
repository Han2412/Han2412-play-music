const Song = require("../models/Songs");

const TopchartController = {
  getAllSongs: (req, res) => {
    Song.getAll((err, songs) => {
      if (err) {
        res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
      } else {
        res.render("topchart", { songs });
      }
    });
  },
  // Các hàm xử lý khác cho controller
};

module.exports = TopchartController;
