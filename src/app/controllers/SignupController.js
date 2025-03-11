const User = require('../models/User'); // Import User model

class SignupController {
    static showSignupForm(req, res) {
        res.render('signup');
    }

    static signupuser(req, res) {
        const user = req.body.email;
        const password = req.body.password;
        const birth = req.body.birth;
        const username = req.body.username;
        const Retype = req.body.Retype;
        if (!user || !password || !birth || !username || password != Retype) {
            // Hiển thị thông báo lỗi khi không nhập email hoặc password
            const errorMessage = 'Vui lòng nhập lại thông tin của bạn.';
            res.render('signup', {
                layout: false,
                errorMessage: errorMessage
            });
        } else {

            User.addUser(user, password, birth, username, (err, result) => {
                if (!user || !password || !birth || !username) {
                    res.render('signup', { message: 'colo:red' });
                } else {

                    res.redirect('/login');
                }
            });
        }


    }
}

module.exports = SignupController;