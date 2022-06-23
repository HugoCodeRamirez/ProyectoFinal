const Televisores = require('../models/Televisores')

exports.televisorCrear = async (req, res) => {
    try {
        let televisor;
        televisor = new Televisores(req.body);
        await televisor.save();
        res.send(televisor)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un error")
    }
}
exports.televisorObtener = async (req, res) => {
    try {
        let televisor = await Televisores.findById(req.params.id)
        if(!televisor){
            res.status(404).json({mensaje:"No existe la informacion solicitada"})
        }
        res.json(televisor)
    }catch(error){
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.listasTelevisores = async(req, res) =>{
    try{
        let televisores = await Televisores.find();
        res.json(televisores)
    }catch(error){
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.actualizarTelevisor = async (req, res) =>{
    try{
        const {marca,tamanopantalla,tipopantalla,precio} = req.body
        let televisor = await Televisores.findById(req.params.id)
        if(!televisor){
            res.status(404).json({mensaje:"No existe la informacion solicitada"})
        }

        televisor.marca = marca
        televisor.tamanopantalla = tamanopantalla
        televisor.tipopantalla = tipopantalla
        televisor.precio = precio

        let procesoActualizar = await Televisores.findOneAndUpdate({_id: req.params.id}, televisor,{new: true})
        res.json(procesoActualizar)
    }catch(error){
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}

exports.borrarTelevisor = async (req, res) =>{
    try{
        let televisor = await Televisores.findById(req.params.id)
        if(!televisor){
            res.status(404).json({mesaje:"No existe la informacion solicitada"})
        }
        await televisor.findByIdAndRemove({_id: req.params.id})
        res.status(200).json({mensaje:"Dato eliminado correctamente"})
    }catch (error){
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}