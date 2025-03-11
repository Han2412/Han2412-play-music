const db = require('../config/db'); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const express = require('express')
const router = express.Router()
const homeController = require('../app/controllers/HomeController')

router.get('/play/:songName', homeController.index)

router.post('/receive_data', homeController.receiveData)
router.get('/search', homeController.search)
router.post('/', homeController.index)
router.get('/', homeController.getHomePage)

module.exports = router;