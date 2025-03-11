const AlbumManagement = require("../models/AlbumManagement");
const db = require("../../config/db");
const { log } = require("handlebars");

const AlbumManagementController = {
  getAllAlbum: (req, res) => {
    AlbumManagement.getAllAlbum((err, albummanagement) => {
      if (err) {
        res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
        return;
      }
      AlbumManagement.getArtist((err, artist) => {
        if (err) {
          res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
        }
        res.render("albummanagement", { albummanagement, artist });
      });
    });
  },

  addAlbum(req, res, next) {
    const formData = req.body;
    const query =
      "INSERT INTO album (Name, Image, ArtistID) VALUES (? , '/img/Rectangle 5.png', ?)";
    const values = [formData.Name, formData.ArtistID];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Lỗi khi thêm dữ liệu vào cơ sở dữ liệu:", err);
        res.status(500).send("Lỗi khi thêm dữ liệu vào cơ sở dữ liệu");
      } else {
        res.redirect("/login/admin/albummanagement");
      }
    });
  },

  albumsong(req, res, next) {
    const AlbumID = req.params.AlbumID;
    AlbumManagement.getAllAblumSong(AlbumID, (err, albumsong) => {
      if (err) {
        res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
        return;
      }
      AlbumManagement.getAlbumbyId(AlbumID, (err, albumById) => {
        if (err) {
          res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
        }
        res.render("albumsongmanagement", { albumsong, albumById });
      });
    });
  },
};

module.exports = AlbumManagementController;
