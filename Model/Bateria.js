const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bateriaSchema = new Schema({

    Model: {
        type: String,

    },
    price: {
        type: String,

    },


    imgUrl: {
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

bateriaSchema.methods.setUrl = function setUrl(filename1, filename2) {

    this.imgUrl = `http://localhost:3002/public/${filename1}`;
    this.image2 = `http://localhost:3002/public/${filename2}`;

}


const Bateria = mongoose.model("Bateria", bateriaSchema);
module.exports = Bateria;
