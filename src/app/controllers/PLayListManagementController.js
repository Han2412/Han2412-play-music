const PlayListMangement = require("../models/PlayListManagement");
const db = require("../../config/db");
const { log } = require("handlebars");

const PlayListManagementController = {
  getAllPlayList: (req, res) => {
    PlayListMangement.getAllPlayList((err, playlistmanagement) => {
      if (err) {
        res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
      } else {
        res.render("playlistmanagement", { playlistmanagement });
      }
    });
  },

  addPlayList(req, res, next) {
    const formData = req.body;

    const query =
      "INSERT INTO playlist (Name, Image, Description ) VALUES (?, '/img/Rectangle 5.png', ?)";
    const values = [formData.Name, formData.Description];

    db.query(query, values, (err, results) => {
      if (err) {
        console.error("Lỗi khi thêm dữ liệu vào cơ sở dữ liệu:", err);
        res.status(500).send("Lỗi khi thêm dữ liệu vào cơ sở dữ liệu");
      } else {
        res.redirect("/login/admin/playlistmanagement");
      }
    });
  },

  playlistsong(req, res, next) {
    const PlaylistID = req.params.PlaylistID;
    PlayListMangement.getAllPlaylistSong(PlaylistID, (err, playlistsong) => {
      if (err) {
        res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
        return;
      }
      PlayListMangement.getPlaylistbyId(PlaylistID, (err, playlistById) => {
        if (err) {
          res.status(500).json({ error: "Lỗi truy vấn cơ sở dữ liệu" });
        }
        res.render("playlistsongmanagement", { playlistsong, playlistById });
      });
    });
  },
};

module.exports = PlayListManagementController;
