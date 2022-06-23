const mongoose = require('mongoose');

const ConsolasSchema = mongoose.Schema({
    marca:{
        type:String,
        required:true
    },
    tipodecontroles:{
        type:String,
        required:true
    },
    controlesincluidos:{
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
module.exports = mongoose.model('Consolas',ProductoSchema);