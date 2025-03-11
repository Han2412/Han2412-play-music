
const Song = require('../models/Songs');

const SongController = {
    getAllSong(req, res) {
        const id = req.params.id;
        Song.getById(id, (err, song) => {
            if (err) {
                res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            } else {
                res.render('playlistsong', { song });
            }
        });
    },

};

module.exports = SongController;

