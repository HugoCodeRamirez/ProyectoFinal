const Computadores = require('../models/computadores')

exports.crearComputadores = async (req, res) => {
    // console.log('creando computadores desde el controlador')
    console.log(req.body);
    try {
        let computadores;
        computadores = new Computadores(req.body);
        await computadores.save();
        res.send(computadores);

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Upsss hubo un error');
    }
}
exports.obtenerComputadores = async (req, res) => {
    try {
        let computadores;
        computadores = await Computadores.find();
        res.json(computadores);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('upsss hubo un error')
    }
}
exports.obtener_computador = async (req, res) => {
    try {
        let computadores = await Computadores.findById(req.params.id)
        if (!computadores) {
            res.status(404).send('Información no existente')
        }
        res.json(computadores)

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Upsss ha ocurrido un error');
    }
}
exports.actualizarComputadores = async (req, res) => {
    try {
        const{marca, memoriaram, discosolido,precio}=req.body;
        let computadores=await Computadores.findById(req.params.id)
        if(!computadores){
            res.status(404).json({mensaje:'no existe la informacion solicitada'})
    
        }
        computadores.marca=marca;
        computadores.memoriaram=memoriaram;
        computadores.discosolido=discosolido;
        computadores.precio=precio;
    
        let procesoActualizacion=await Computadores.findOneAndUpdate({_id:req.params.id},computadores,{new:true})
        res.json(procesoActualizacion)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('upss ha ocurrido un error')
    }
}   
exports.borrarComputadores=async(req,res)=>{
    try{
        let computadores =await Computadores.findById(req.params.id)
        if(!computadores)
        {
            res.status(404).json({mensaje:'no existe la informacion solicitada'})
        }
        await Computadores.findByIdAndRemove({_id:req.params.id})
        res.status(200).json({mensaje:'dato eliminado correctamente'})
    }
    catch(error){
        console.log(error)
        res.status(500).send('upss ha ocurrido un error')
    }
}