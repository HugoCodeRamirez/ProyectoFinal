const express=require('express');
const router =express.Router();
const productoController=require('../controllers/productoController')

router.post('/',productoController.crearProductos);
router.get('/obtenerProductos',productoController.obtenerProductos);
router.get('/obtener_producto/:id',productoController.obtener_producto);
router.put('/actualizarProducto/:id',productoController.actualizarProducto);
router.delete('/borrarProducto/:id',productoController.borrarProducto);

module.exports=router;