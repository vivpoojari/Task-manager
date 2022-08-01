const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    // .then(() => console.log('CONNECTED TO DB....'))
    // .catch((err) => console.log(err))
}

module.exports = connectDB

