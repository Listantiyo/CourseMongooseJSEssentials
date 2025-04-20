const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/bookstore';

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.info('Database connected succcesfully');
    }catch(err){
        console.error(err.message);
        process.exit(1); //Exit procecess failure.
    }
}

module.exports = connectDB();