const db = require('../config/db'); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const express = require('express')
const router = express.Router()
const admincontroller = require('../app/controllers/admincontroller')


router.post('/', admincontroller.index)
router.get('/login', loginController.loginuser)
router.post('/login', loginController.loginuser)
module.exports = router;
const Search = require('../models/User');


const admin = {
    index(req, res) {
        res.render('admin')
    },

    search(req, res) {
        Search.search(req.query.query, (err, searchresults) => {
            if (err) {
                res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });
            } else if (!(req.query.query)) {
                res.render('admin');
            } else {
                res.render('searchresult', { searchresults });
            }
        });
    },
}

module.exports = admin;