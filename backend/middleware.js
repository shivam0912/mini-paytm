const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.userId) {
            req.userId = decoded.userId;
            return next(); // Only call next() once and return
        } else {
            return res.status(403).json({ message: 'Forbidden' });
        }
    } catch (err) {
        return res.status(403).json({ message: 'Forbidden' });
    }
};

module.exports = {
    authMiddleware
}
