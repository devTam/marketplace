import User from '../models/user';
import { hashPassword, comparePassword } from '../utils/auth';

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Please provide all fields'
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                message: 'Password must be at least 6 characters long'
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const hashedPassword = await hashPassword(password);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        return res.status(201).json({
            message: 'User created successfully'
        });
        
    } catch (error) {
        res.status(500).send({ message: 'Error registering user' });
    }
};

export {  register }; 