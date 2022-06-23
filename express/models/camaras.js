const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    categoria:{
        type:String,
        required:true
    },
    nombreProducto:{
        type:String,
        required:true
    },
    marca:{
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
module.exports = mongoose.model('Producto',ProductoSchema);