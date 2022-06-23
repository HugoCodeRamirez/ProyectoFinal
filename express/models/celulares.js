const mongoose = require('mongoose');

const CelularesSchema = mongoose.Schema({
    marca:{
        type:String,
        required:true
    },
    memoriainterna:{
        type:String,
        required:true
    },
    memoriaram:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    fec_creac:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('Celulares',ProductoSchema);