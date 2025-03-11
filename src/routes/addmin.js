const db = require('../config/db'); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const express = require('express')
const router = express.Router()
const homeController = require('../app/controllers/HomeController')
router.get('/search', homeController.search)
router.get('/', homeController.index)
router.post('/', homeController.index)
module.exports = router;