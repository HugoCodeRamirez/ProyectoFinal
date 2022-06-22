const Producto = require('../models/Producto')

exports.crearProductos = async (req, res) => {
    // console.log('creando producto desde el controlador')
    console.log(req.body);
    try {
        let producto;
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Upsss hubo un error');
    }
}
exports.obtenerProductos = async (req, res) => {
    try {
        let producto;
        producto = await Producto.find();
        res.json(producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('upsss hubo un error')
    }
}
exports.obtener_producto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id)
        if (!producto) {
            res.status(404).send('Información no existente')
        }
        res.json(producto)

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Upsss ha ocurrido un error');
    }
}
exports.actualizarProducto = async (req, res) => {
    try {
        const{categoria,nombreProducto,marca,precio}=req.body;
        let producto=await Producto.findById(req.params.id)
        if(!producto){
            res.status(404).json({mensaje:'no existe la informacion solicitada'})
    
        }
        producto.categoria=categoria;
        producto.nombreProducto=nombreProducto;
        producto.marca=marca;
        producto.precio=precio;
    
        let procesoActualizacion=await Producto.findOneAndUpdate({_id:req.params.id},producto,{new:true})
        res.json(procesoActualizacion)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('upss ha ocurrido un error')
    }
}   
exports.borrarProducto=async(req,res)=>{
    try{
        let producto =await Producto.findById(req.params.id)
        if(!producto)
        {
            res.status(404).json({mensaje:'no existe la informacion solicitada'})
        }
        await Producto.findByIdAndRemove({_id:req.params.id})
        res.status(200).json({mensaje:'dato eliminado correctamente'})
    }
    catch(error){
        console.log(error)
        res.status(500).send('upss ha ocurrido un error')
    }
}