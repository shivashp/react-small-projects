const router = require('express').Router();
const postController = require('../controller/postController');
const response = require('../utils');
const { authenticated } = require('../utils/helper'); 

router.get('/', authenticated, (req, res) => {
    postController.getAllPost().then(posts => {
        response.sendData(res, posts);
    }).catch(err => {
        response.sendDataError(res, err);
    })
});


router.get('/:id', (req, res) => {
    postController.getSinglePost(req.params.id).then(post => {
        response.sendData(res, post);
    }).catch(err => {
        response.sendDataError(res, err);
    })
});

router.post('/', (req, res) => {
    postController.addPost(req.body).then(post => {
        response.sendDataSuccess(res, "Post added Successfully!", post);
    }).catch(err => {
        response.sendDataError(res, err);
    })
});

module.exports = router;