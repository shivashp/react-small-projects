const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


let userSchema = new Schema({
    name: {type: String, required: [true, "Name is required"]},
    username: {type: String, required: [true, "Username is required"]},
    password: {type: String, required: [true, "Password is required"], minlength: [5, 'Pasword should have more than 5 characters']},
    posts: [{type: Schema.ObjectId, ref:'Post'}],
    created_at: Date,
    updated_at: Date
})

userSchema.pre('save', function(next) {
    let currentDate = Date.now();
    this.updated_at = currentDate;
    if(!this.created_at) 
        this.created_at = currentDate;
    if(this.isModified("password")) {
        this.password = bcrypt.hashSync(this.password);
    }
    next();
});

userSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
} 

let User = mongoose.model('User', userSchema);

module.exports = User;