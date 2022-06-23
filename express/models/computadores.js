const mongoose = require('mongoose');

const ComputadoresSchema = mongoose.Schema({
    marca:{
        type:String,
        required:true
    },
    memoriaram:{
        type:String,
        required:true
    },
    discosolido:{
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
module.exports = mongoose.model('Computadores',ProductoSchema);