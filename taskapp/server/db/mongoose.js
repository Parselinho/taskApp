const mongoose = require('mongoose');
require('dotenv').config();
// main().catch(err => console.log(err));

async function main() {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('database connected');
    } catch (e) {
      console.error('database connection failed', e)
    }
}

module.exports = main;