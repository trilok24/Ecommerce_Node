const jwt = require('jsonwebtoken');
exports.auth = (req,res,next)=>{
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access Denied. No token provided.');
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
        } catch (error) {
            return res.status(400).send('Invalid token');
            }
            };
