const express=require('express');
const conectarDB=require('./config/db')
const app=express();

conectarDB();
app.use(express.json());



app.use('/api',require('./routes/proyectoRutas'))

app.listen(4000,()=>{
    console.log('servidor en la parte superior')
})






