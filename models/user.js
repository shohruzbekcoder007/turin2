const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: Number,
        required: true,
        enum: [1,2,3]
    }
});

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, role: this.role }, "q1y1npar0l",
    // {expiresIn: '300s'}
    );
    return token;
  }

const User = mongoose.model("users", UserSchema);
module.exports.User = User;