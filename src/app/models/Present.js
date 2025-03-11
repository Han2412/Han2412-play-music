const db = require('../../config/db');  


const Present = {
    getAll:  function (callback)  {
        const sqlQuery = `
        SELECT songs.songid AS id, songs.link AS link, songs.name AS title, songs.image AS image, songs.lyric AS lyric 
        FROM songs
        JOIN historysong ON songs.songid = historysong.songid
        JOIN history ON historysong.historyID = history.historyid
        JOIN users ON history.UserID = Users.UserID
      
      `;
      db.query(sqlQuery, callback);
    },
  

  
  };

  
  module.exports = Present;