
const Playlist = require('../models/Playlist');

const PlaylistController = {
    getAllPlaylist: (req, res) => {
        Playlist.getAll((err, playlist) => {
            if (err) {
                res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            } else {
                res.render('playlist', { playlist });
            }
        });
    },

    getAllPlaylistSong(req, res) {
        const id = req.params.playlistId;
        Playlist.getAllPlaylistSong(id, (err, playlistsong) => {
            if (err) {
                res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
                return;
            }
            const id = req.params.playlistId;
            Playlist.getById(id, (err, playlist) => {
                if (err) {
                    res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
                } else {
                    res.render('playlistsong', { playlistsong, playlist });
                    // res.json(artist)
                }
            }
            )
        });
    },

};

module.exports = PlaylistController;

