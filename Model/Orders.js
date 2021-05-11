const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const orderSchema = new Schema({

      
     orderID: ObjectId,

      userId: { 
        type: ObjectId, 
        ref: "User",
        required: true
    },
      
      payment :{
          type:Object,
          required:true
      },

      product :{
          type:Object,
          required :true,
          
      },

    
     precio_total:{
         type:String
     }

    
})

const toJSONConfig = {
    transform: (doc, ret, opt) => {
        delete ret['password']
        return ret
    }
};



orderSchema.set('toJSON', toJSONConfig);
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
