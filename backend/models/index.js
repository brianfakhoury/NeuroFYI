const
    mongoose = require('mongoose'),
    userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    }),
    networkSchema = new mongoose.Schema({
        data: Object,
        creator: mongoose.Schema.Types.ObjectId
    });

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true}, error => {
    error
    ? console.error(error)
    : console.log("-------> MongoDB connected!!");
});

module.exports = {
    User: mongoose.model('User', userSchema),
    Network: mongoose.model('Network', networkSchema)
};
