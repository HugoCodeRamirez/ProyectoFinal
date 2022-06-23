const Consolas = require('../models/consolas')

exports.crearConsolass = async (req, res) => {
    // console.log('creando consolas desde el controlador')
    console.log(req.body);
    try {
        let consolas;
        consolas = new Consolas(req.body);
        await consolas.save();
        res.send(consolas);

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Upsss hubo un error');
    }
}
exports.obtenerConsolas = async (req, res) => {
    try {
        let consolas;
        consolas = await Consolas.find();
        res.json(consolas);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('upsss hubo un error')
    }
}
exports.obtener_consolas = async (req, res) => {
    try {
        let consolas = await Consolas.findById(req.params.id)
        if (!consolas) {
            res.status(404).send('Información no existente')
        }
        res.json(consolas)

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Upsss ha ocurrido un error');
    }
}
exports.actualizarConsolas = async (req, res) => {
    try {
        const{marca, tipodecontroles,controlesincluidos,precio}=req.body;
        let consolas=await consolas.findById(req.params.id)
        if(!consolas){
            res.status(404).json({mensaje:'no existe la informacion solicitada'})
    
        }
        consolas.marca=marca;
        consolas.tipodecontroles=tipodecontroles;
        consolas.controlesincluidos=controlesincluidos;
        consolas.precio=precio;
    
        let procesoActualizacion=await Consolas.findOneAndUpdate({_id:req.params.id},consolas,{new:true})
        res.json(procesoActualizacion)
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send('upss ha ocurrido un error')
    }
}   
exports.borrarConsolas=async(req,res)=>{
    try{
        let consolas =await Consolas.findById(req.params.id)
        if(!consolas)
        {
            res.status(404).json({mensaje:'no existe la informacion solicitada'})
        }
        await consolas.findByIdAndRemove({_id:req.params.id})
        res.status(200).json({mensaje:'dato eliminado correctamente'})
    }
    catch(error){
        console.log(error)
        res.status(500).send('upss ha ocurrido un error')
    }
}