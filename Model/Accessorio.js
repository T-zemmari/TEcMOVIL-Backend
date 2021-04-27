const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const accessorioSchema = new Schema({

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
     
      creationDate: {
        type: Date,
        default: new Date
    },

    
})

accessorioSchema.methods.setUrl = function setUrl(filename){
    
   this.imgUrl = `http://localhost:3002/public/${filename}`
}


const Accessorios = mongoose.model("Accesorios", accessorioSchema);
module.exports = Accessorios;
