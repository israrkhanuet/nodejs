const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

        _id:mongoose.Schema.Types.ObjectId,
        name:String,
        class:String,
        age:Number
    });

module.exports = mongoose.model('Student',studentSchema);