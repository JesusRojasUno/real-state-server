const mongoose = require('mongoose');

//propiedades de modelo
const HouseSchema = new mongoose.Schema({
    houseName:{
        type: String,
        required: true   
    },
    houseType:{
        type: String,
        required: true
    },
    housePrice:{
        type: Number,
        required: true
    },
    houseImage:{
        type: String,
        required: false

        },
});
 
const House = mongoose.model('House',HouseSchema);

module.exports = {
    House

};