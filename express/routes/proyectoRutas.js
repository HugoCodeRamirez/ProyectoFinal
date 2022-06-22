const express=require('express');
const router =express.Router();
const productoController=require('../controllers/productoController');
const contactoController = require('../controllers/contactoControllers')

router.post('/producto/crearProducto',productoController.crearProductos);
router.get('/producto/obtenerProductos',productoController.obtenerProductos);
router.get('/producto/obtener_producto/:id',productoController.obtener_producto);
router.put('/producto/actualizarProducto/:id',productoController.actualizarProducto);
router.delete('/producto/borrarProducto/:id',productoController.borrarProducto);

router.post('/contacto/crear-contacto', contactoController.crearContacto)
router.get('/contacto/obtener-lista-contactos', contactoController.obtenerContactos)
router.get('/contacto/obtener-contacto', contactoController.obtenerContacto)
router.put('/contacto/actualizar-contacto/:id', contactoController.actualizarContacto)
router.delete('/contacto/borrar-contacto/:id', contactoController.borrarContacto)

module.exports=router;