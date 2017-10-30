const jwt = require('jsonwebtoken');
const secret = 'shivapandey';

const transformError = (obj) => {
    let errors = [];
    if(typeof(obj) === 'object'){
        for (key in obj.errors) {
            let message =  obj.errors[key]['message'];
            errors.push(message);
        }
        return {errors};
    } else {
        return obj;
    }
}

const authenticated = (req, res, next) => {
    if(req.headers.authorization) {
        let token = req.headers.authorization;
        jwt.verify(token, secret, (err, decoded) => {
            if(err) {
                res.send({"status": "failed", "message": "Not Authorized"});
            } else {
                req.user_id = decoded.id;
                next();
            }
        })
    } else {
        res.send({"status": "failed", "message": "Not Authorized"});
    }
}

module.exports = {
    transformError, authenticated
}