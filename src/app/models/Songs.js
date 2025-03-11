
const { query } = require("express");


const db = require('../../config/db');  // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo
const fs = require('fs');


const Songs = {
  getAll: (callback) => {
    db.query(
      "SELECT songs.Image AS song_img, songs.link as link, songs.Time AS song_time, songs.name AS song_name, songs.NumberListens AS song_NumberListen ,artists.name AS artist_name FROM songs INNER JOIN artistssong ON songs.songID = artistssong.songID INNER JOIN artists ON artistssong.artistID = artists.artistID order by songs.NumberListens DESC LIMIT 10;",
      callback
    );
  },
  // Các phương thức khác cho model

  getById(id, callback) {
    const query = "SELECT * FROM `songs` WHERE songs.SongID = ?;";
    // Truyền tham số vào mảng
    db.query(query, [id], callback);
  },

  //Topchart
  getBySort: (callback) => {
    db.query('SELECT songs.Image AS song_img,songs.link as link ,songs.Time AS song_time, songs.name AS song_name, songs.NumberListens AS song_NumberListen ,artists.name AS artist_name FROM songs INNER JOIN artistssong ON songs.songID = artistssong.songID INNER JOIN artists ON artistssong.artistID = artists.artistID order by songs.NumberListens DESC LIMIT 10;', callback);
  },
};

module.exports = Songs;

// 
