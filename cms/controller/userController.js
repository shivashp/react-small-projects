const User = require('../model/users');

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
        !valid && reject("Password Not Valid") || resolve(user);
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