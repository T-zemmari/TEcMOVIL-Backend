const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({

      name :{
          type:String,
          required:true
      },
      
      image :{
          type:String,
          required:true
      },

      price :{
          type:String,
          required :true,
       
      },

      description: {
          type:String,
        
      },

      

      creationDate: {
        type: Date,
        default: new Date
    },

    
})


const Product = mongoose.model("Product", productSchema);
module.exports = Product;
