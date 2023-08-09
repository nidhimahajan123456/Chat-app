// exports.getUsers =  (req, res, next) => {
//     res.status(201).json({
//         success: true,
//         messgae:"User details  successfully"
//       })
// }
const User = require('../model/user');
const crypto = require('crypto');

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  try {

    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: 'avatars/kccvibpsuismwfepb3m',
        url: 'https://res.cloudinary.com/shopit/image/upload/v1606305757/avatars/kccvibpsuismwfepb3m.png'
      }
    })
  
    sendToken(user, 200, res)
    
 
  } catch (e) {
    res.send({
      error:e.message,
      code : 500
    })
  }

  //sendToken(user, 200, res)
});