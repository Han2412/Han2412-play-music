const db = require("../../config/db"); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const Artist = {
  getAll: (callback) => {
    db.query("SELECT * FROM artists", callback);
  },

  getById(id, callback) {
    const query = "SELECT * FROM `artists` WHERE artists.ArtistID = ?;";
    db.query(query, [id], callback);
  },

  getAllArtistSong(id, callback) {
    const query = "SELECT songs.Time AS song_time, artists.ArtistID AS artist_id, songs.SongID AS song_id, songs.Name AS song_name, songs.link as link,artists.Name AS artist_name, songs.Image AS song_img FROM songs INNER JOIN artistssong ON songs.SongID = artistssong.SongID INNER JOIN artists ON artistssong.ArtistID = artists.ArtistID WHERE artists.ArtistID = ?;";
    // Truyền tham số vào mảng
    db.query(query, [id], callback);
  },

  
};

module.exports = Artist;
