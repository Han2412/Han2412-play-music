const db = require("../../config/db"); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const AlbumManagement = {
  getAllAlbum: (callback) => {
    db.query(
      "SELECT album.AlbumID AS album_ID, album.Name AS album_name, album.Image AS album_img, album.NumberOfSong AS album_NumberOfSong , artists.Name As artist_name, artists.ArtistID AS artist_ID from album INNER JOIN artists ON album.ArtistID = artists.ArtistID;",
      callback
    );
  },

  getArtist: (callback) => {
    db.query("SELECT * FROM artists", callback);
  },

  getAllAblumSong(AlbumID, callback) {
    const query =
      "SELECT artists.Name AS artist_name, songs.* FROM album JOIN songs ON album.AlbumID = songs.AlbumID JOIN artistssong ON songs.SongID = artistssong.SongID JOIN artists ON artistssong.ArtistID = artists.ArtistID WHERE album.AlbumID = ?;";
    // Truyền tham số vào mảng
    db.query(query, [AlbumID], callback);
  },

  getAlbumbyId: (AlbumID, callback) => {
    db.query(
      "SELECT album.*, artists.Name AS artist_name FROM album JOIN artists ON album.ArtistID = artists.ArtistID WHERE album.AlbumID = ?",
      [AlbumID],
      callback
    );
  },
  // Các phương thức khác cho model
};

module.exports = AlbumManagement;
