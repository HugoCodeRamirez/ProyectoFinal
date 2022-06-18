const express=require('express');
const app=express();
const conectarDB=require('./config/db')

conectarDB();
app.use(express.json());
app.use('/api/contacto',require('./routes/contactoRutas'))
app.use('/api/productos',require('./routes/producto'))
app.listen(4000,()=>{
    console.log('servidor en la parte superior')
})