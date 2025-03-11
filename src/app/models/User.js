const db = require('../../config/db'); // Điều này đảm bảo sử dụng kết nối cơ sở dữ liệu đã tạo

const user = {
    getAll: (callback) => {
        db.query('SELECT * FROM users', callback);
    },
    // Các phương thức khác cho model

    getUserByUsername(emailid, callback) {
        const query = "SELECT * FROM users WHERE email = " + "?";
        db.query(query, [emailid], (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }
            if (results.length === 0) {
                callback(null, null);
                return;
            }
            callback(null, results[0], );
        });

    },
    getuserrole(emailid, callback) {
        const query = "SELECT Role FROM Users WHERE Email = " + "?";
        db.query(query, [emailid], (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }
            if (results.length === 0) {
                callback(null, null);
                return;
            }


            callback(null, results[0]);
        });
    },


    addUser(user, password, birth, username, callback) {
        const query = 'INSERT INTO users (Email, Password, DateOfBirth, UserName,Role) VALUES (?, ?, ?, ?,1)';
        db.query(query, [user, password, birth, username], callback);
    }

};


module.exports = user;