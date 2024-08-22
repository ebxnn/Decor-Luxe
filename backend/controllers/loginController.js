import User from '../models/UserModel.js';
import argon2 from 'argon2';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Password received for login:', password);  // Debugging line
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    console.log('User found:', user);  // Debugging line

    const isMatch = await argon2.verify(user.password, password);
    console.log('Password verification result during login:', isMatch);  // Debugging line

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
