const jwt = require("jsonwebtoken");

const sendToken = (user, statusCode, res) => {
  // Create Jwt token
  //const token = user.getJwtToken();
  // 
  console.log("user");
  const token = jwt.sign(
    { user_id:2 },
   'hjlkjkljkl',
    {
      expiresIn: "2h",
    }
  );
  // save user token
  user.token = token;

  // Options for cookie
  const options = {
    expires: new Date(
      Date.now() + 10 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
