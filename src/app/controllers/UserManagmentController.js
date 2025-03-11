const usermangement = require("../models/usermanagement");
const db = require("../../config/db");
const UserMangementController = {
  getAllUsers: (req, res) => {
    usermangement.getAllUser((err, userManagementData) => {
      if (err) {
        res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
      } else {
        res.render("admin", {usermangement: userManagementData, layout: false });
      }
    });
  },

  store(req, res, next) {
    const formData = req.body;
    const query =
      "INSERT INTO users (UserName, Email, Password, Image, DateOfBirth, Role, Status) VALUES (?, ?, ?, ?, ?, 1, 0)";
    const values = [
      formData.UserName,
      formData.Email,
      formData.Password,
      formData.Image,
      formData.DateOfBirth,
    ];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Lỗi khi thêm dữ liệu vào cơ sở dữ liệu:", err);
        res.status(500).send("Lỗi khi thêm dữ liệu vào cơ sở dữ liệu");
      } else {
        res.redirect("/login/admin");
      }
    });
  },

  edit(req, res, next) {
    const userId = req.params.UserID;
    usermangement.getUserById(userId, (err, usermangement) => {
      if (err) {
        console.error("Lỗi khi truy vấn cơ sở dữ liệu MySQL:", err);
        next(err);
        return;
      }
      // else {
      res.render("edit", { usermangement });
      // res.json(usermangement);
      // }
    });
  },

  update(req, res, next) {
    const userId = req.params.UserID;
    const userName = req.body.UserName;
    const email = req.body.Email;
    const password = req.body.Password;
    const dateOfBirth = req.body.DateOfBirth;
    let errorMessage = "";

    // Kiểm tra các trường có giá trị không rỗng trước khi thực hiện câu truy vấn
    if (!userName || !email || !password || !dateOfBirth) {
      errorMessage = "Một hoặc nhiều trường bị trống.";
    } else {
      const query =
        "UPDATE users SET UserName = ?, Email = ?, Password = ?, DateOfBirth = ? WHERE UserID = ?";
      const values = [userName, email, password, dateOfBirth, userId];

      db.query(query, values, (err, results) => {
        if (err) {
          console.error(
            "Lỗi khi cập nhật dữ liệu vào cơ sở dữ liệu MySQL:",
            err
          );
          next(err);
        } else {
          res.redirect("/login/admin");
        }
      });
    }
  },
  deleteUser(req, res, next) {
    const userId = req.params.UserID;
    const query = "UPDATE users set status = 1 WHERE UserID = ?";
    db.query(query, [userId], (err, results) => {
      if (err) {
        console.error("Lỗi khi xóa người dùng trong cơ sở dữ liệu MySQL:", err);
        next(err);
      } else {
        res.redirect("/login/admin");
      }
    });
  },
};

module.exports = UserMangementController;
