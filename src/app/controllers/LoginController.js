const User = require("../models/User");

class loginController {
    static showLoginForm(req, res) {
        res.render('login');
    }

    static loginuser(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            // Hiển thị thông báo lỗi khi không nhập email hoặc password
            const errorMessage = 'Vui lòng nhập email và mật khẩu.';
            res.render('login', {
                layout: false,
                errorMessage: errorMessage
            });
        } else {
            User.getUserByUsername(email, (error, results) => {
                if (error || email !== results.Email || password !== results.Password) {
                    const errorMessage = 'Sai email hoặc mật khẩu.';
                    // Xử lý khi thông tin đăng nhập không hợp lệ
                    res.render('login', {
                        layout: false,
                        errorMessage: errorMessage,
                    });
                } else {
                    if (results.Role.toString('hex') === "00") {
                        res.redirect('/admin');
                    } else {
                        res.redirect('/');
                    }
                }
            });
        }
    }
}










module.exports = loginController