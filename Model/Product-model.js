const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({

      name :{
          type:String,
          required:true
      },
      price :{
          type:String,
          required :true
      },

      description: {
          type:String,
        
      },
      rate:{
          type:Number
      },
      color:{
          type:String,
          default:'No especificado'
      }
      ,
      imgUrl:{
          type:String,

      },
      pantalla:{
          type:String,
          default:'No especificado'
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
