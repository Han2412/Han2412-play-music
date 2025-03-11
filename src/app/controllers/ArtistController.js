const Artist = require('../models/Artist');

const ArtistController = {
  getAllArtist: (req, res) => {
    Artist.getAll((err, artist) => {
      if (err) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
      } else {
        res.render('artist', { artist });
      }
    });
  },
  getAllArtistSong(req, res) {
    const id = req.params.artistId;
    Artist.getAllArtistSong(id, (err, artistsong) => {
      if (err) {
        res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
        return;
      }

      const id = req.params.artistId;
      Artist.getById(id, (err, artist) => {
        if (err) {
          res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
        } else {
          res.render('artistsong', { artistsong, artist });
          // res.json(artist)
        }
      });
      //res.json(artistsong)
      

    });
  },

  
}

module.exports = ArtistController;
