const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "",
    password: "",
    database: ""
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = db;