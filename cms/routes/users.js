const router = require('express').Router();
const userController = require('../controller/userController');
const response = require('../utils');
const User = require('../model/users');

router.get('/', (req, res) => {
    userController.getUsers().then(users => {
        response.sendData(res, users);
    }).catch(err => {
        response.sendDBError(res);
    })
})

router.post('/', (req, res) => {
    userController.addUser(req.body).then(user => {
        response.sendDataSuccess(res, "User Added Successfully!", user);
    }).catch(err => {
        response.sendDBError(res, err);
    })
})

router.post('/login', (req, res) => {
   userController.userLogin(req.body.username, req.body.password).then(user => {
       response.sendDataSuccess(res, "Login Successful", user);
   }).catch(err => {
       response.sendDataError(res, err);
   })
})

router.delete('/:id', (req, res) => {
    userController.deleteUser(req.params.id).then(() => {
        response.sendDataSuccess(res, 'User Deleted Successfully!', '');
    }).catch(err => {
        response.sendDBError(res, err);
    })
})
module.exports = router;