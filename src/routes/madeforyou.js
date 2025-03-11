const express = require('express')
const router = express.Router()
const madeforyouController = require('../app/controllers/MadeforyouController')

router.get('/', madeforyouController.getAllSongs)

module.exports = router;


//
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('public'));

const mp3Directory = './public/music';

app.get('/audio/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(mp3Directory, fileName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // Nếu file không tồn tại
      res.status(404).send('Fkhông tìm thấy nha');
    } else {
      // Nếu file tồn tại
      const stat = fs.statSync(filePath);
      const fileSize = stat.size;

      // Đọc file và gửi nó dưới dạng stream
      const readStream = fs.createReadStream(filePath);
      
      // Thiết lập header cho response
      res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fileSize,
      });

      // Gửi file dưới dạng stream
      readStream.pipe(res);
    }
  });
});













