const express = require('express')
const morgan = require('morgan')
const route = require('./routes')
const exphbs = require('express-handlebars')
const path = require('path')
const db = require('./config/db')
const bodyParser = require('body-parser')
const fs = require('fs');
const csv = require('csv-parser');
// const { Console } = require('console')
const axios = require('axios');
const app = express()
const port = 3000

app.use(bodyParser.json());

app.post('/search', (req, res) => {
  // Dữ liệu cần gửi
  const data = req.body.query;

  // Gửi dữ liệu tới chương trình Python chạy trên Streamlit
  axios.post('http://localhost:8501', data) // Thay đổi URL theo địa chỉ Python chạy Streamlit
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Route để xử lý dữ liệu từ web nghe nhạc
// app.get('/search', async (req, res) => {
//   try {
//     // Gửi request lên server Python (app.py trên Streamlit) cùng với dữ liệu từ web nghe nhạc
//     const response = await axios.post('http://localhost:8501/receive-data', {
//       musicData: req.query.query // Thay 'musicData' bằng tên dữ liệu bạn muốn gửi
//     });

//     // Xử lý phản hồi từ server Python (nếu cần)
//     console.log(response.query);

//     res.send('Dữ liệu đã được gửi thành công đến server Python.');
//   } catch (error) {
//     res.status(500).send('Lỗi khi gửi dữ liệu đến server Python.');
//   }
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// app.post('/search', (req, res) => {
//   const searchTerm = req.body.searchTerm; // Nhận dữ liệu từ frontend


//   // Gửi dữ liệu tới ứng dụng Python
//   const dataToSend = { searchTerm }; // Chuẩn bị dữ liệu cần gửi
//   const pythonAppUrl = 'http://localhost:5000/receive-search-data'; // Địa chỉ endpoint Python
//   request.post({
//     url: pythonAppUrl,
//     json: dataToSend
//   }, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//       res.json({ status: 'Data sent to Python' }); // Trả về kết quả cho frontend
//     } else {
//       res.status(500).json({ error: 'Failed to send data to Python' });
//     }
//   });
//   // Xử lý yêu cầu tìm kiếm ở đây (có thể là logic tìm kiếm trên trang web nghe nhạc)

//   // Ví dụ trả về kết quả là một danh sách các bài hát
//   // const searchResults = [
//   //   { title: 'Song 1', artist: 'Artist 1' },
//   //   { title: 'Song 2', artist: 'Artist 2' },
//   //   // Thêm dữ liệu tìm kiếm khác tại đây
//   // ];
//   // console.log(req.body); // In ra toàn bộ dữ liệu gửi từ frontend
//   console.log(searchTerm);
//   res.json({ results: searchTerm }); // Trả về kết quả tìm kiếm
//   // console.log(searchTerm)
// });


// Get music list from csv file
const songs = [];
fs.createReadStream('D:/play-music-final/Music_Recommender_System/spotify_millsongdata.csv')
  .pipe(csv())
  .on('data', (row) => {
    songs.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');
  });



// app.post('/search', (req, res) => {
//   const searchTerm = req.body.searchTerm; // Lấy dữ liệu tìm kiếm từ frontend

//   if (!searchTerm) {
//     return res.status(400).send('Please provide a search term.');
//   }

//   // Gửi dữ liệu tìm kiếm sang app.py
//   axios.post('http://localhost:8501/receive-search-data', { searchTerm })
//     .then(response => {
//       // Xử lý phản hồi từ ứng dụng Python (nếu cần)
//       console.log(response.data);
//       //...
//     })
//     .catch(error => {
//       // Xử lý lỗi nếu có
//       console.error(error);
//     });
// });



// Endpoint để xử lý tìm kiếm bài hát
app.get('/search', (req, res) => {
  const searchTerm = req.query.query;

  if (!searchTerm) {
    return res.status(400).send('Please provide a search term.');
  }

  // Tìm kiếm trong mảng songs
  const searchResults = songs.filter(song => {
    return (
      song.song.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) // Kiểm tra tồn tại trường title trước khi sử dụng includes
    );
  });
  res.render('searchresult', { searchResults })
  //res.json(searchResults); // Trả về kết quả tìm kiếm dưới dạng JSON
});

app.get('/play/:songName', (req, res) => {
  const songName = req.params.songName;
  // Trả về file nhạc theo tên
  res.sendFile(__dirname + `/public/music/${songName}.mp3`);

});



//Kiểm tra connect to db
db.connection;

//Set static file
app.use(express.static(path.join(__dirname, 'public')))

// Midleware xử lý dữ liệu từ form sublit lên
app.use(express.urlencoded({
  extended: true //npm body parser
}))

app.use(express.json())

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphbs.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})