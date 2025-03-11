const Home = require('../models/Home');
const Playlist = require('../models/Playlist');
const Artist = require('../models/Artist');
const Topchart = require('../models/Songs');

const songData = [];

const HomeController = {
    index(req, res) {
        res.render('home');
    },

    getHomePage(req, res) {
        Playlist.getAll((errPlaylist, playlists) => {
            if (errPlaylist) {
                res.status(500).json({ error: 'Lỗi khi lấy danh sách phát' });
                return;
            }

            Artist.getAll((errArtist, artists) => {
                if (errArtist) {
                    res.status(500).json({ error: 'Lỗi khi lấy thông tin nghệ sĩ' });
                    return;
                }

                Topchart.getBySort((errTopchart, topchart) => {
                    if (errTopchart) {
                        res.status(500).json({ error: 'Lỗi khi lấy thông tin bảng xếp hạng' });
                        return;
                    }

                    res.render('home', { playlists, artists, topchart, songData });
                });
            });
        });
    },

    search(req, res) {
        const searchQuery = req.query.query;
    
        if (!searchQuery) {
            return res.render('home');
        }
    
        Home.search(searchQuery, (err, searchResults) => {
            if (err) {
                return res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            }

            if (searchResults.length === 0) {
                return res.render('noresults');
            }

            res.render('searchresult', { searchresults: searchResults });
        });
    },

    receiveData(req, res) {
        const { recommended_music_names, recommended_music_posters } = req.body;

        songData.length = 0;

        for (let i = 0; i < recommended_music_names.length; i++) {
            songData.push({
                song_name: recommended_music_names[i],
                img_path: recommended_music_posters[i]
            });
        }

        res.send('Dữ liệu đã được nhận và lưu tạm thời');
    }
};

module.exports = HomeController;
