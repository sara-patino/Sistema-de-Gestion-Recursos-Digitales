const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/recursos-digitales', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a la base de datos establecida');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

exports.connectDB = connectDB;