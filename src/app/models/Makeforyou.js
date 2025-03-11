
const db = require('../../config/db'); 
// Tạo kết nối đến cơ sở dữ liệu


// Model cho bảng chứa thông tin bài hát
const Makeforyou = {
  getAllSongs: function(callback) {
    db.query('SELECT songs.songid as song_id,songs.name as song_name,  songs.link as song_link,songs.time as song_time,songs.image as song_img FROM songs', callback);
  },



};

module.exports = Makeforyou;
