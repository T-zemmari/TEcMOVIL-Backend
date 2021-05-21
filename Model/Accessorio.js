const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accessorioSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    priceWithoutIva: {
        type: Number,
        required: true
    },
    priceWithIva: {
        type: Number,
        required: true
    },

    description: {
        type: String,

    },
    rate: {
        type: Number
    },
    color: {
        type: String,
        default: 'No especificado'
    }
    ,
    image1: {
        type: String,

    },
    image2: {
        type: String,

    },
    creationDate: {
        type: Date,
        default: new Date
    },


})

accessorioSchema.methods.setUrl = function setUrl(filename1, filename2) {

    this.image1 = `http://localhost:3002/public/${filename1}`;
    this.image2 = `http://localhost:3002/public/${filename2}`;


}


const Accessorios = mongoose.model("Accesorios", accessorioSchema);
module.exports = Accessorios;
