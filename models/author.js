var mongoose = require('mongoose');
var authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Author', authorSchema);