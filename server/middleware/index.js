import expressJwt from 'express-jwt';

// middleware to return request user object if token is valid
export const requireSignin = expressJwt({
    getToken: (req, res) => req.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
});