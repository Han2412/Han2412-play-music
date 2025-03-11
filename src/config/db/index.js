const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost", // Thay đổi thông tin kết nối theo cấu hình của bạn
  user: "root",
  database: "play-music",
});

connection.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối đến cơ sở dữ liệu: " + err.message);
  } else {
    console.log("Kết nối thành công đến cơ sở dữ liệu");
  }
});

module.exports = connection;
