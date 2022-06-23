const express=require('express');
const router =express.Router();
const productoController=require('../controllers/productoController');
const contactoController = require('../controllers/contactoControllers');
const computadorController = require('../controllers/computadoresControllers');
const camarasController = require('../controllers/consolasControllers');
const televisorController = require('../controllers/televisorControllers')

router.post('/producto/crearProducto',productoController.crearProductos);
router.get('/producto/obtenerProductos',productoController.obtenerProductos);
router.get('/producto/obtener_producto/:id',productoController.obtener_producto);
router.put('/producto/actualizarProducto/:id',productoController.actualizarProducto);
router.delete('/producto/borrarProducto/:id',productoController.borrarProducto);

router.post('/contacto/crear-contacto', contactoController.crearContacto);
router.get('/contacto/obtener-lista-contactos', contactoController.obtenerContactos);
router.get('/contacto/obtener-contacto', contactoController.obtenerContacto);
router.put('/contacto/actualizar-contacto/:id', contactoController.actualizarContacto);
router.delete('/contacto/borrar-contacto/:id', contactoController.borrarContacto);

router.post('/televisor-crear', televisorController.televisorCrear);
router.get('/televisor-obtener', televisorController.televisorObtener);
router.get('/listas-televisores', televisorController.listasTelevisores);
router.put('/actualizar-televisor', televisorController.actualizarTelevisor);
router.delete('/borrar-televisor', televisorController.borrarTelevisor)

router.post('/computador/', computadorController.crearComputadores)
router.get('/computador/obtenerComputadores', computadorController.obtenerContactos)
router.get('/computador/obtener_producto', computadorController.obtener_computador)
router.put('/computador/actualizarComputador/:id', computadorController.actualizarComputador)
router.delete('/computador/borrarComputador/:id', computadorController.borrarComputador)

router.post('/camaras/', camarasController.crearCamaras)
router.get('/camaras/obtenerCamaras', camarasController.obtenerCamaras)
router.get('/camaras/obtener_camaras', camarasController.obtener_camaras)
router.put('/camaras/actualizarCamaras/:id', camarasController.actualizarCamaras)
router.delete('/camaras/borrarCamaras/:id', camarasController.borrarCamaras)

router.post('/consolas/', consolasController.crearConsolas)
router.get('/consolas/obtenerConsolas', consolasController.obtenerConsolas)
router.get('/consolas/obtener_consolas', consolasController.obtener_consolas)
router.put('/consolas/actualizarConsolas/:id', consolasController.actualizarConsolas)
router.delete('/consolas/borrarConsolas/:id', consolasController.borrarConsolas)

module.exports=router;