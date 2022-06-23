const express=require('express');
const router =express.Router();
const productoController=require('../controllers/productoControllers');
const contactoController = require('../controllers/contactoControllers');
const televisoresController = require('../controllers/televisoresControllers')
const computadoresController = require('../controllers/computadoresControllers');
const camarasController = require('../controllers/camarasControllers');
const consolasController = require('../controllers/consolasControllers');

router.post('/producto/crearProductos',productoController.crearProductos);
router.get('/producto/obtenerProductos',productoController.obtenerProductos);
router.get('/producto/obtener_producto/:id',productoController.obtener_producto);
router.put('/producto/actualizarProducto/:id',productoController.actualizarProducto);
router.delete('/producto/borrarProducto/:id',productoController.borrarProducto);

router.post('/contacto/crearContacto', contactoController.crearContacto);
router.get('/contacto/obtener-lista-contactos', contactoController.obtenerContactos);
router.get('/contacto/obtener-contacto', contactoController.obtenerContacto);
router.put('/contacto/actualizar-contacto/:id', contactoController.actualizarContacto);
router.delete('/contacto/borrar-contacto/:id', contactoController.borrarContacto);

router.post('/televisor/elevisorCrear', televisoresController.televisorCrear);
router.get('/televisor/televisor-obtener', televisoresController.televisorObtener);
router.get('/televisor/listas-televisores', televisoresController.listasTelevisores);
router.put('/televisor/actualizar-televisor', televisoresController.actualizarTelevisor);
router.delete('/televisor/borrar-televisor', televisoresController.borrarTelevisor)

router.post('/computador/crearComputadores', computadoresController.crearComputadores)
router.get('/computador/obtenerComputadores', computadoresController.obtenerContactos)
router.get('/computador/obtener_producto', computadoresController.obtener_computador)
router.put('/computador/actualizarComputador/:id', computadoresController.actualizarComputador)
router.delete('/computador/borrarComputador/:id', computadoresController.borrarComputador)

router.post('/camaras/crearCamaras', camarasController.crearCamaras)
router.get('/camaras/obtenerCamaras', camarasController.obtenerCamaras)
router.get('/camaras/obtener_camaras', camarasController.obtener_camaras)
router.put('/camaras/actualizarCamaras/:id', camarasController.actualizarCamaras)
router.delete('/camaras/borrarCamaras/:id', camarasController.borrarCamaras)

router.post('/consolas/crearConsolas', consolasController.crearConsolas)
router.get('/consolas/obtenerConsolas', consolasController.obtenerConsolas)
router.get('/consolas/obtener_consolas', consolasController.obtener_consolas)
router.put('/consolas/actualizarConsolas/:id', consolasController.actualizarConsolas)
router.delete('/consolas/borrarConsolas/:id', consolasController.borrarConsolas)

module.exports=router;