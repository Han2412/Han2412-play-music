const db = require("../../config/db"); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const Playlist = {
  getAll: (callback) => {
    db.query("SELECT * FROM playlist", callback);
  },

  getById(id, callback) {
    const query = "SELECT * FROM `playlist` WHERE playlist.PlaylistID = ?;";
    db.query(query, [id], callback);
  },

  getAllPlaylistSong(id, callback) {
    const query = "SELECT songs.SongID AS song_id,songs.link as link, songs.Name AS song_name, artists.Name AS artist_name, songs.Image AS song_img, playlist.Image AS playlist_img, playlist.Name AS playlist_name, playlist.Describe AS playlist_desc, playlist.PlaylistID AS playlist_id FROM songs INNER JOIN playlistsong ON songs.SongID = playlistsong.SongID INNER JOIN playlist ON playlistsong.PlaylistID = playlist.PlaylistID INNER JOIN artistssong ON songs.SongID = artistssong.SongID INNER JOIN artists ON artistssong.ArtistID = artists.ArtistID WHERE playlist.PlaylistID = ?;";
    // Truyền tham số vào mảng
    db.query(query, [id], callback);
  },

};

module.exports = Playlist;
