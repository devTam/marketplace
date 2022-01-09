import express from 'express';
import { register, login, logout, currentUser, forgotPassword } from '../controllers/auth';
import { requireSignin } from '../middleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/current-user', requireSignin, currentUser);
router.post('/forgotPassword', forgotPassword)

module.exports = router;