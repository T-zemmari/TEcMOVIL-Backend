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

      phone: {
          type:String,
          required:true
      },
      address: {
          type:String,
          
      },
      born:{
          type:String,

      },
      payment:{
          type:String,
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
