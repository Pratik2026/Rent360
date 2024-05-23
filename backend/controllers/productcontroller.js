const db = require('../config/dbconfig');

const getAllProducts = (req, res) => {
    const sqlCheck = "SELECT * FROM product";
    db.query(sqlCheck, (err, data) => {
        if (err) return res.json({ message: "Error getting products. Try later", status: false });
        return res.json(data);
    });
}

const addProduct = (req, res) => {
    const sqlCheck = "INSERT INTO product (title, description, price, seller_mobile_number, product_image_url, address, userid) VALUES (?,?,?,?,?,?,?)";
    const valuesCheck = [
        req.body.title,
        req.body.description,
        Number(req.body.price),
        req.body.seller_mobile_number,
        req.body.product_image_url,
        req.body.address,
        req.body.userid
    ];

    db.query(sqlCheck, valuesCheck, (err, data) => {
        if (err) return res.json({ message: "Error creating ad. Try later", status: false });
        return res.json({ message: "Product posted!", status: true, data });
    });
}

const getProductById = (req, res) => {
    const sqlCheck = "SELECT * FROM product where id=?";
    const valuesCheck = [req.body.id];

    db.query(sqlCheck, valuesCheck, (err, data) => {
        if (err) return res.json({ message: "Error getting product. Try later", status: false });
        return res.json(data.length > 0 ? { data } : { data: [] });
    });
}

const getFilteredProducts = (req, res) => {
    const sqlCheck = "SELECT * FROM product WHERE title LIKE ? OR title LIKE ? OR title LIKE ? OR description LIKE ? OR description LIKE ? OR description LIKE ?";
    const valuesCheck = [
        `%${req.body.category}%`,
        `%${req.body.category}`,
        `${req.body.category}%`,
        `%${req.body.category}%`,
        `%${req.body.category}`,
        `${req.body.category}%`
    ];

    db.query(sqlCheck, valuesCheck, (err, data) => {
        if (err) return res.json({ message: "Error getting products. Try later", status: false });
        return res.json(data.length > 0 ? data : { data: [] });
    });
}

const getUserProducts = (req, res) => {
    const sqlCheck = "SELECT * FROM product WHERE userid=?";
    const valuesCheck = [req.body.userid];

    db.query(sqlCheck, valuesCheck, (err, data) => {
        if (err) return res.json({ message: "Error getting products. Try later", status: false });
        return res.json(data.length > 0 ? data : { data: [] });
    });
}

module.exports = { getAllProducts, addProduct, getProductById, getFilteredProducts, getUserProducts };
