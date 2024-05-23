const db = require('../config/dbconfig');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    const sqlCheck = 'SELECT * FROM users WHERE userid = ? or email = ?';
    const valuesCheck = [req.body.userid, req.body.email];

    db.query(sqlCheck, valuesCheck, (err, data) => {
        if (err) return res.json({ message: "Error creating user. Try later", status: false });

        if (data.length > 0) {
            return res.json({ message: "Username or email already exists!", status: false });
        } else {
            const sql = 'INSERT INTO users (userid, name, email, password, phone) VALUES (?,?,?,?,?)';
            const values = [
                req.body.userid,
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.phone
            ];

            db.query(sql, values, (insertErr, insertData) => {
                if (insertErr) return res.json({ message: "Error creating user. Try later", status: false });
                return res.json({ message: "User created!", status: true, data: insertData });
            });
        }
    });
}

const login = (req, res) => {
    const sqlCheck = 'SELECT * FROM users WHERE userid = ? and password = ?';
    const valuesCheck = [req.body.userid, req.body.password];

    db.query(sqlCheck, valuesCheck, (err, data) => {
        if (err) return res.json({ message: "Error logging in. Try later", status: false });

        if (data.length > 0) {
            const { name, userid } = data[0];
            const token = jwt.sign({ name, userid }, "our-secret-key", { expiresIn: "1d" });
            res.cookie('token', token);
            return res.json({ message: "Logging in..", status: true, name, userid });
        } else {
            return res.json({ message: 'Bad credentials', status: false });
        }
    });
}

const logout = (req, res) => {
    res.clearCookie('token');
    return res.json({ status: true });
}

module.exports = { register, login, logout };
