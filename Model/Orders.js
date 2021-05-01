const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = mongoose.ObjectID


const orderSchema = new Schema({

      id :{
          type:ObjectID,
          required:true
      },
      
      Product_id :{
          type:String,
          required:true
      },

      User_id :{
          type:String,
          required :true,
          unique:true
      },

      Payment: {
          type:String,
          required:true
      },
    
      Product_info: {
          type:Object,
          required:true
      },
     
     
      creationDate: {
        type: Date,
        default: new Date
    },

    
});



const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
