const express=require('express');
const conectarDB=require('./config/db')
const app=express();






app.use('/api/contacto',require('./routes/contactoRutas'))
