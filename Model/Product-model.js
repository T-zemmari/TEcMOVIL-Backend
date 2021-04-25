const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({

      name :{
          type:String,
          required:true
      },
    
      image_front:{
          type:String,
         
      },

      image_back:{
          type:String,
      },
      image_lat:{
          type:String
      },

      price :{
          type:String,
          required :true,
       
      },

      description: {
          type:String,
        
      },
      imgUrl:{
          type:String,

      },
      creationDate: {
        type: Date,
        default: new Date
    },

    
})

productSchema.methods.setUrl = function setUrl(filename){
    
   this.imgUrl = `http://localhost:3002/public/${filename}`
}


const Product = mongoose.model("Product", productSchema);
module.exports = Product;
