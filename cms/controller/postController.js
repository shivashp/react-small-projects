const mongoose = require('mongoose');
const Post = require('../model/posts');
const User = require('../model/users');

const getAllPost = () => new Promise((resolve, reject) => {
    Post.find({}).populate('author','_id name').exec((err, posts) => {
        err && reject(err) || resolve(posts);
    })
});

const getSinglePost = (id) => new Promise((resolve, reject) => {
    Post.findOne(id, (err, post) => {
        err && reject(err) || resolve(post);
    })
});

const addPost = (obj) => new Promise((resolve, reject) => {
    let post = new Post(obj);
    post.save((err, post) => {
        if(err) {
            reject(err);
        } else {
            User.findById(obj.author, (err, user) => {
                if(err) {
                    reject(err);
                } else {
                    user.posts.push(post._id);
                    user.save((err, user) => {
                        err && reject(err) || resolve(post)
                    })
                }
            })
        }
    });
});

module.exports = {
    getAllPost, getSinglePost, addPost
}