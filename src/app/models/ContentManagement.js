const db = require("../../config/db"); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const ContentManagement = {
  getAllMusic: (callback) => {
    db.query("SELECT * FROM songs WHERE status_song = b'0'", callback);
  },

  getSongById: (SongID, callback) => {
    db.query("SELECT * FROM songs WHERE SongID = ?", [SongID], callback);
  },
  // Các phương thức khác cho model
};

module.exports = ContentManagement;
