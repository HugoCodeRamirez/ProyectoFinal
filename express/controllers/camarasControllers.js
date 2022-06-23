const Camaras = require('../models/camaras')

exports.crearCamaras = async (req, res) => {
    // console.log('creando camaras desde el controlador')
    console.log(req.body);
    try {
        let camaras;
        camaras = new Camaras(req.body);
        await camaras.save();
        res.send(camaras);

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Upsss hubo un error');
    }
}
exports.obtenerCamaras = async (req, res) => {
    try {
        let camaras;
        camaras = await Camaras.find();
        res.json(camaras);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('upsss hubo un error')
    }
}
exports.obtener_camara = async (req, res) => {
    try {
        let camaras = await Camaras.findById(req.params.id)
        if (!camaras) {
            res.status(404).send('Información no existente')
        }
        res.json(camaras)

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Upsss ha ocurrido un error');
    }
}
exports.actualizarCamaras = async (req, res) => {
    try {
        const{marca, tipodecamara,resolucion,precio}=req.body;
        let camaras=await Camaras.findById(req.params.id)
        if(!camaras){
            res.status(404).json({mensaje:'no existe la informacion solicitada'})
    
        }
        camaras.marca=marca;
        camaras.tipodecamara=tipodecamara;
        camaras.resolucion=resolucion;
        camaras.precio=precio;
    
        let procesoActualizacion=await Camaras.findOneAndUpdate({_id:req.params.id},camaras,{new:true})
        res.json(procesoActualizacion)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('upss ha ocurrido un error')
    }
}   
exports.borrarCamaras=async(req,res)=>{
    try{
        let camaras =await Camaras.findById(req.params.id)
        if(!camaras)
        {
            res.status(404).json({mensaje:'no existe la informacion solicitada'})
        }
        await Camaras.findByIdAndRemove({_id:req.params.id})
        res.status(200).json({mensaje:'dato eliminado correctamente'})
    }
    catch(error){
        console.log(error)
        res.status(500).send('upss ha ocurrido un error')
    }
}