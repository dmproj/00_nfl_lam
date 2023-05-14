const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.S_KEY, (err, user) => {
      if (err) res.status(403).json("VERIFY_TOKEN, token is not valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("VERIFY_TOKEN, YOU AREN AUTHENTICATED");
  }
}

module.exports = verify
