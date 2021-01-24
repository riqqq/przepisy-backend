const mongoose = require('mongoose');

const PrzepisSchema = mongoose.Schema({
    nazwa: {
        type: String,
        unique: true
    },
    opis: String,
    trudnosc: String,
    wymaganeProdukty: [{
        type: String
    }],
    postedBy: {
        type: String,
        default: 'Anonymous'
    }
});

module.exports = mongoose.model('Przepis', PrzepisSchema);