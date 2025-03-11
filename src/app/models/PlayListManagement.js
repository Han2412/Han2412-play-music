const db = require("../../config/db"); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const PlayListMangement = {
  getAllPlayList: (callback) => {
    db.query("SELECT * FROM playlist", callback);
  },
  // Các phương thức khác cho model
  getAllPlaylistSong(PlaylistID, callback) {
    const query =
      "SELECT songs.Name AS song_name, artists.Name AS artist_name, songs.Image AS song_img,songs.Time AS song_time ,playlist.Image AS playlist_img, playlist.Name AS playlist_name, playlist.Description AS playlist_desc, playlist.PlaylistID AS playlist_id FROM songs INNER JOIN playlistsong ON songs.SongID = playlistsong.SongID INNER JOIN playlist ON playlistsong.PlaylistID = playlist.PlaylistID INNER JOIN artistssong ON songs.SongID = artistssong.SongID INNER JOIN artists ON artistssong.ArtistID = artists.ArtistID WHERE playlist.PlaylistID = ?;";
    // Truyền tham số vào mảng
    db.query(query, [PlaylistID], callback);
  },

  getPlaylistbyId: (PlaylistID, callback) => {
    db.query(
      "SELECT * FROM playlist WHERE PlaylistID = ?",
      [PlaylistID],
      callback
    );
  },
};

module.exports = PlayListMangement;
