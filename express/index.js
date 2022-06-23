// Creamos el servidor
const express=require('express');
const conectarDB=require('./config/db');
const cors = require('cors');

const app=express();

conectarDB();
app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/proyectoRutas'))

app.listen(4000,()=>{
    console.log('servidor en la parte superior')
})







