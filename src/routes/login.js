const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/LoginController");

const usermanagementController = require("../app/controllers/UserManagmentController");
const ContentManagementController = require("../app/controllers/ContentManagementController");
const PlaylistManagementController = require("../app/controllers/PlayListManagementController");
const AlbumManagementController = require("../app/controllers/AlbumManagementController");
const ArtistManagementController = require("../app/controllers/ArtistManagementController");
// quản lí user
router.get("/admin", usermanagementController.getAllUsers);
router.post("/store", usermanagementController.store);
router.get("/admin/:UserID/edit", usermanagementController.edit);
router.post("/admin/:UserID/edit", usermanagementController.update);
router.post("/admin/:UserID", usermanagementController.deleteUser);


//quản lí bài hát
router.get("/admin/songmanagement", ContentManagementController.getAllMusic);
router.post(
  "/admin/songmanagement/addNewSong",
  ContentManagementController.addNewSong
);

router.get(
  "/admin/songmanagement/:SongID/editsong",
  ContentManagementController.editSong
);
router.post(
  "/admin/songmanagement/:SongID/editsong",
  ContentManagementController.updateSong
);
router.post(
  "/admin/songmanagement/:SongID",
  ContentManagementController.deleteSong
);


// quản lí playlist
router.get(
  "/admin/playlistmanagement",
  PlaylistManagementController.getAllPlayList
);
router.post(
  "/admin/playlistmanagement/addPlayList",
  PlaylistManagementController.addPlayList
);
router.get(
  "/admin/playlistmanagement/:PlaylistID/playlistsongmanagement",
  PlaylistManagementController.playlistsong
);

//quản lí album
router.get("/admin/albummanagement", AlbumManagementController.getAllAlbum);
router.post(
  "/admin/albummanagement/addAlbum",
  AlbumManagementController.addAlbum
);
router.get(
  "/admin/albummanagement/:AlbumID/albumsongmanagement",
  AlbumManagementController.albumsong
);
//quản lí artist
router.get("/admin/artistmanagement", ArtistManagementController.getAllArtist);
router.post(
  "/admin/artistmanagement/addArtist",
  ArtistManagementController.addArtist
);
router.get(
  "/admin/artistmanagement/:ArtistID/artistsongmanagement",
  ArtistManagementController.artistSong
);
router.get("/user", (req, res) => {
  res.render("user", {
    layout: false,
  });
});
// router.post('/', (req, res) => {
//     // Render trang đăng nhập mà không sử dụng layout và các partials
//     res.render('login', {
//         layout: false, // Không sử dụng layout
//     });
// });

router.post('/', loginController.loginuser)
router.get('/admin')



router.get("/", (req, res) => {
  // Render trang đăng nhập mà không sử dụng layout và các partials
  res.render("login", {layout: false });
});

module.exports = router;
