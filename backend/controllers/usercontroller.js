const db = require('../config/dbconfig');

const showWishlist = (req, res) => {
    const sqlCheck = "SELECT * FROM wishlist where userid=?";
    const valuesCheck = [req.body.userid];

    db.query(sqlCheck, valuesCheck, (err, data) => {
        if (err) return res.json({ message: "Error getting wishlist. Try later", status: false });

        if (data.length > 0) {
            const productIds = data.map(item => item.id);
            const sqlCheck2 = "SELECT * FROM product WHERE id IN (?)";
            db.query(sqlCheck2, [productIds], (err, products) => {
                return res.json(products);
            });
        } else {
            return res.json({ data: [] });
        }
    });
}

const addWishlist = (req, res) => {
    const sqlCheck = "SELECT * FROM wishlist where userid=? and id=?";
    const valuesCheck = [req.body.userid, req.body.id];

    db.query(sqlCheck, valuesCheck, (err, data) => {
        if (err) return res.json({ message: "Error checking wishlist. Try later", status: false });

        if (data.length > 0) {
            const sqlDelete = "DELETE FROM wishlist WHERE userid = ? AND id = ?";
            db.query(sqlDelete, valuesCheck, (deleteErr) => {
                if (deleteErr) return res.json({ message: "Error removing product from wishlist", status: false });
                return res.json({ message: "Product removed from wishlist", status: true });
            });
        } else {
            const sqlInsert = "INSERT INTO wishlist (userid, id) VALUES (?,?)";
            db.query(sqlInsert, valuesCheck, (insertErr, insertData) => {
                if (insertErr) return res.json({ message: "Error adding product to wishlist", status: false });
                return res.json({ message: "Product added to wishlist!", status: true, data: insertData });
            });
        }
    });
}

const checkWishlist = (req, res) => {
    const sqlCheck = 'SELECT * FROM wishlist WHERE userid=? and id=?';
    const valuesCheck = [req.body.userid, req.body.id];

    db.query(sqlCheck, valuesCheck, (err, data) => {
        if (err) return res.json({ message: "Error getting product details. Try later", status: false });
        return res.json(data.length > 0 ? { status: true, data } : { status: false, data });
    });
}

module.exports = { showWishlist, addWishlist, checkWishlist };
