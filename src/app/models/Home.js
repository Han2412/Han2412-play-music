const db = require('../../config/db'); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const Home = {
  search(searchTerm, callback) {
    const query = "SELECT songs.Image AS song_img, songs.Time AS song_time, songs.name AS song_name, artists.name AS artist_name FROM songs INNER JOIN artistssong ON songs.songID = artistssong.songID INNER JOIN artists ON artistssong.artistID = artists.artistID WHERE songs.name LIKE ?";
    const value = `%${searchTerm}%`;
    db.query(query, value, callback);
  },

  
  
};

module.exports = Home;
