const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const repuestosSchema = new Schema({

      marca :{
          type:String,
          required:true
      },
      modelo :{
          type:String,
          required :true
      },
    
      pantalla:{
          type:Number,
          default:98
      },
      bateria:{
          type:Number,
          default:39
      },
      software:{
          type:Number,
          default:49
      },
      conectorDeCarga:{
          type:Number,
          default:29
      },
      microfono:{
        type:Number,
        default:35
      },
      auricular:{
        type:Number,
        default:34
       },
       image1:{
        type:String,

      },
       image2:{
      type:String,
       },
      buzz:{
        type:Number,
        default:45
    },

      creationDate: {
        type: Date,
        default: new Date
    },

    
})
repuestosSchema.methods.setUrl = function setUrl(filename1,filename2){
    
    this.image1 = `http://localhost:3002/public/${filename1}`;
    this.image2 =`http://localhost:3002/public/${filename2}`;
    
 
 }




const Repuesto = mongoose.model("Repuesto", repuestosSchema);
module.exports = Repuesto;
