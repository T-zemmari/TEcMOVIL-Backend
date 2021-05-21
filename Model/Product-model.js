const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({

    name: {
        type: String,

    },
    price: {
        type: String,

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
    imgUrl: {
        type: String,

    },
    image2: {
        type: String,
    },
    pantalla: {
        type: String,
        default: 'No especificado'
    },
    bateria: {
        type: String,
        default: 'No especificado'
    },
    Procesador: {
        type: String,
        default: 'No especificado'
    },
    creationDate: {
        type: Date,
        default: new Date
    },


})

productSchema.methods.setUrl = function setUrl(filename1, filename2) {

    this.imgUrl = `http://localhost:3002/public/${filename1}`;
    this.image2 = `http://localhost:3002/public/${filename2}`;

}


const Product = mongoose.model("Product", productSchema);
module.exports = Product;
