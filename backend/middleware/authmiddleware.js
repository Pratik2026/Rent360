const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Message: "we need token please provide it." });
    } else {
        jwt.verify(token, "our-secret-key", (err, decode) => {
            if (err) {
                return res.json({ Message: "Authentication error" });
            } else {
                req.name = decode.name;
                req.userid = decode.userid;
                next();
            }
        });
    }
}

module.exports = { verifyUser };