const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

      

      name :{
          type:String,
          required:true
      },
      
      lastname :{
          type:String,
          required:true
      },

      email :{
          type:String,
          required :true,
          unique:true
      },

      password: {
          type:String,
          required:true
      },
      nif:{
          type:String,
          default:'No se ha especificado'
      }
      ,

      phone: {
          type:String,
          required:true
      },
      adress: {
          type:String,
          default:'Calle Blasco Ibañez 21-44 46008 Valencia'
          
      },
      born:{
          type:String,

      },
      payment:{
          type:Object,
          default:{
              nombre_tarjeta :"Tarik Zemmari kissani",
              Numero_de_laTarjeta  : "4444-5555-4444-5252",
              Fecha_expiracion:"20/22",
              CVC:585
          }
      },
      admin:{
          type:Boolean,
          default:false
      },

      creationDate: {
        type: Date,
        default: new Date
    },

    
})

const toJSONConfig = {
    transform: (doc, ret, opt) => {
        delete ret['password']
        return ret
    }
};



userSchema.set('toJSON', toJSONConfig);
const User = mongoose.model("User", userSchema);
module.exports = User;
