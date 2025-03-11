const ContentManagement = require("../models/ContentManagement");
const db = require("../../config/db");
const { log } = require("handlebars");

const ContentMangementController = {
  getAllMusic: (req, res) => {
    ContentManagement.getAllMusic((err, songmanagememt) => {
      if (err) {
        res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
      } else {
        res.render("songmanagement", { songmanagememt });
      }
    });
  },

  addNewSong(req, res, next) {
    const formData = req.body;
    const query =
      "INSERT INTO songs (Name, Image, Lyric, Link, Time, NumberListens, status_song) VALUES (?,'/img/Rectangle 33.png' ,?, ?, ?, 0, 0)";
    const values = [
      formData.Name,
      formData.Lyric,
      formData.Link,
      formData.Time,
    ];

    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Lỗi khi thêm dữ liệu vào cơ sở dữ liệu:", err);
        res.status(500).send("Lỗi khi thêm dữ liệu vào cơ sở dữ liệu");
      }
      res.redirect("/login/admin/songmanagement");
    });
  },

  editSong(req, res, next) {
    const songId = req.params.SongID;
    console.log(songId);
    ContentManagement.getSongById(songId, (err, songdetail) => {
      if (err) {
        console.error("Lỗi khi truy vấn cơ sở dữ liệu MySQL:", err);
        res.status(500).send("Lỗi khi thêm dữ liệu vào cơ sở dữ liệu");
        return;
      }
      res.render("editsong", { songdetail }); // Sử dụng res.render để hiển thị view
    });
  },

  updateSong(req, res, next) {
    const SongID = req.params.SongID;
    const Name = req.body.Name;
    const Lyric = req.body.Lyric;
    const Link = req.body.Link;
    const Time = req.body.Time;
    let errorMessage = "";

    // Kiểm tra các trường có giá trị không rỗng trước khi thực hiện câu truy vấn
    if (!Name || !Lyric || !Link || !Time) {
      errorMessage = "Một hoặc nhiều trường bị trống.";
    } else {
      const query =
        "UPDATE songs SET Name = ?, Lyric = ?, Link = ?, Time = ? WHERE SongID = ?";
      const values = [Name, Lyric, Link, Time, SongID];

      db.query(query, values, (err, results) => {
        if (err) {
          console.error(
            "Lỗi khi cập nhật dữ liệu vào cơ sở dữ liệu MySQL:",
            err
          );
          next(err);
        } else {
          res.redirect("/login/admin/songmanagement");
        }
      });
    }
  },

  deleteSong(req, res, next) {
    const SongID = req.params.SongID;
    const query = "UPDATE songs set status_song = 1 WHERE SongID = ?";
    db.query(query, [SongID], (err, results) => {
      if (err) {
        console.error("Lỗi khi xóa người dùng trong cơ sở dữ liệu MySQL:", err);
        next(err);
      } else {
        res.redirect("/login/admin/songmanagement");
      }
    });
  },

  //chức năng playlist
};

module.exports = ContentMangementController;
