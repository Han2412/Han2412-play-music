const db = require("../../config/db"); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const usermanagement = {
  getAllUser: (callback) => {
    db.query(
      "SELECT * FROM users WHERE Role = b'1' and Status = b'0'",
      callback
    );
  },
  getUserById: (userId, callback) => {
    db.query("SELECT * FROM users WHERE UserID = ?", [userId], callback);
  },
  // Các phương thức khác cho model
};

module.exports = usermanagement;
