const db = require("../../config/db"); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const ArtistManagement = {
  getAllArtist: (callback) => {
    db.query("SELECT * FROM artists", callback);
  },
  // Các phương thức khác cho model
  getAllArtistSong: (ArtistID, callback) => {
    db.query(
      "SELECT songs.Name AS SongName, songs.Image AS SongImage, songs.Time AS SongTime, artists.Name AS ArtistName, artists.Image AS ArtistImage, artists.Country FROM songs JOIN artistssong ON songs.SongID = artistssong.SongID JOIN artists ON artistssong.ArtistID = artists.ArtistID WHERE artistssong.ArtistID = ?;",
      [ArtistID],
      callback
    );
  },

  getArtistById: (ArtistID, callback) => {
    db.query("SELECT * FROM artists WHERE ArtistID = ?", [ArtistID], callback);
  },
};

module.exports = ArtistManagement;
