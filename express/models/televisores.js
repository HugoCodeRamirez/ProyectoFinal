const mongoose = require('mongoose');

const TelevisoresSchema = mongoose.Schema({
    marca:{
        type:String,
        required:true
    },
    tamañopantalla:{
        type:String,
        required:true
    },
    tipodepantalla:{
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
module.exports = mongoose.model('Televisores',ProductoSchema);