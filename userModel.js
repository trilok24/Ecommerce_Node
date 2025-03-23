const mongoose = require('mongoose');
const validator = require('validator')

const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('./s3config'); // Import the S3 configuration

// Create multer storage for S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME, // Your S3 bucket name
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, `profile_images/${Date.now().toString()}-${file.originalname}`);
    }
  })
});

// Use the upload middleware in the route
exports.uploadProfileImage = upload.single('profileImage'); // 'profileImage' is the name of the form field


const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true
  },
  lname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
    validate: {
      validator: function (email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
      },
      message: "Invalid email format"
    }
  },
  profileImage: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    match: /^[6-9]\d{9}$/,
    validate: {
      validator: function (phone) {
        return /^[6-9]\d{9}$/.test(phone);
      },
      message: "Invalid phone number format"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  address: {
    shipping: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: Number, required: true }
    },
    billing: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      pincode: { type: Number, required: true }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);


module.exports = User;
