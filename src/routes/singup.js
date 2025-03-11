const express = require('express')
const router = express.Router()
const signupController = require('../app/controllers/SignupController')


router.get('/', (req, res) => {
    // Render trang đăng nhập mà không sử dụng layout và các partials
    res.render('signup', {
        layout: false, // Không sử dụng layout
    });
});
router.post('/', signupController.signupuser, (req, res) => {
    // Render trang đăng nhập mà không sử dụng layout và các partials

    res.render('signup', {
        layout: false, // Không sử dụng layout
    });
});


module.exports = router;