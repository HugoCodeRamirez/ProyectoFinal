const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema({
    correo: {
        type: String,
        require: true
    },
    nombres: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    },
    contrasena: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("contacto", contactoSchema)