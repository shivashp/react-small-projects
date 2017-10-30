const User = require('../model/users');
const jwt = require('jsonwebtoken');
const secret = 'shivapandey';

const getUsers = () => new Promise((resolve, reject) => {
    User.find({}).populate('posts','_id title').exec((err, data) => {
        err && reject(err) || resolve(data);
    });
})

const addUser = (user) => new Promise((resolve, reject) => {
    let userData = new User(user);
    userData.save((err, user) => {
        err && reject(err) || resolve(user)
    })
});

const userLogin = (username, password) => new Promise((resolve, reject) => {
    User.findOne({"username": username}, (err, user) => {
        let valid = user.isValidPassword(password);
        let token = jwt.sign({id: user._id}, secret);
        let userObj = {
            _id: user._id,
            name: user.name,
            token: token
        }
        !valid && reject("Password Not Valid") || resolve(userObj);
    })
})

const deleteUser = (id) => new Promise((resolve, reject) => {
    User.findById(id, (err, user) => {
        user.remove((err) => {
            err && reject(err) || resolve('');
        })
    })
});


module.exports = {
    getUsers, addUser, userLogin, deleteUser
}