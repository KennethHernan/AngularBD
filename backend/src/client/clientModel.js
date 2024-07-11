var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    phone: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Cliente', clientSchema);