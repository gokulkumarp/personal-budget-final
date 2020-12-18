const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    budget: {
        type: Number
    },
    date: {
      type: Date,
      required: true,
    },
    capacity:{
        
            type:Number,
            default:0 
        
    }
  }, {
        collection: 'budgetapp'
    })

module.exports = mongoose.model('budgetapp', userSchema)