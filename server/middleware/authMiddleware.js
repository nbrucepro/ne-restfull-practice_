const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization.substr(7);
    console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
 
  try {
    // Verify and decode the token
    const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjg3MjQ2MTk2fQ.uwFy4PsvfzqUwEFAW4wPAMLivk1r3S97rI-xzs6Dv7k", 'jwt-secret');

    // Attach the user ID to the request object
    req.userId = decoded.id;
    next();
  } catch (err) {    
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
