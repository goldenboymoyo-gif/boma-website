import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config({ path: './.env' });

const ADMIN_EMAIL = 'goldenboymoyo@gmail.com';

async function makeAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const user = await User.findOne({ email: ADMIN_EMAIL });
    if (!user) {
      console.log(`No user found with email: ${ADMIN_EMAIL}`);
      console.log('Please register an account first, then run this script again.');
      process.exit(1);
    }

    user.role = 'admin';
    await user.save();
    console.log(`SUCCESS: ${user.name} (${user.email}) is now an admin.`);
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

makeAdmin();
