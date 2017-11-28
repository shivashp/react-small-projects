const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: String,
    body: String,
    author: {type: Schema.ObjectId, ref: 'User'},
    comments: [{
        title: String,
        author: {type: Schema.ObjectId, ref: 'User'}
    }],
    created_at: Date,
    updated_at: Date
});

postSchema.pre('save', function() {
    let currentDate = Date.now();
    this.updated_at = currentDate;
    if(!this.created_at) 
        this.created_at = currentDate;
});

let Post = mongoose.model('Post', postSchema);

module.exports = Post;