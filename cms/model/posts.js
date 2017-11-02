const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {type: String, required: [true, "Title is required!"]},
    body: {type: String, required: [true, "Body is required!"]},
    author: {type: Schema.ObjectId, ref: 'User', required: [true, "Author is required"]},
    comments: [{
        title: String,
        author: {type: Schema.ObjectId, ref: 'User'}
    }],
    created_at: Date,
    updated_at: Date
});

postSchema.pre('save', function(next) {
    let currentDate = Date.now();
    this.updated_at = currentDate;
    if(!this.created_at) 
        this.created_at = currentDate;
    next();
});


let Post = mongoose.model('Post', postSchema);

module.exports = Post;