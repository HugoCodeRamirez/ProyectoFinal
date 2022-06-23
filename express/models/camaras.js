const mongoose = require('mongoose');

const CamarasSchema = mongoose.Schema({
    marca:{
        type:String,
        required:true
    },
    tipodecamara:{
        type:String,
        required:true
    },
    resolucion:{
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
module.exports = mongoose.model('Camaras',CamarasSchema);