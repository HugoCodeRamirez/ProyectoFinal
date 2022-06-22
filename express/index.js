const express=require('express');
const conectarDB=require('./config/db')
const app=express();

conectarDB();
app.use(express.json());
<<<<<<< HEAD
app.use('/api/contacto',require('./routes/contactoRutas'))
app.use('/api/productos',require('./routes/producto'))
app.listen(4000,()=>{
    console.log('servidor en la parte superior')
})
=======
app.use('/api',require('./routes/proyectoRutas'))

app.listen(4000,()=>{
    console.log('servidor en la parte superior')
})






>>>>>>> 71dd14199b7b0985ddc7675889b1ba3508fbffeb
