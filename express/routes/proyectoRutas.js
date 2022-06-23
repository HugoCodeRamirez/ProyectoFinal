const express=require('express');
const router =express.Router();
const productoControllers=require('../controllers/productoControllers');
const contactoControllers = require('../controllers/contactoControllers');
const televisoresControllers = require('../controllers/televisoresControllers')
const computadoresControllers = require('../controllers/computadoresControllers');
const camarasControllers = require('../controllers/camarasControllers');
const consolasControllers = require('../controllers/consolasControllers');

router.post('/producto/crearProductos',productoControllers.crearProductos);
router.get('/producto/obtenerProductos',productoControllers.obtenerProductos);
router.get('/producto/obtener_producto/:id',productoControllers.obtener_producto);
router.put('/producto/actualizarProducto/:id',productoControllers.actualizarProducto);
router.delete('/producto/borrarProducto/:id',productoControllers.borrarProducto);

router.post('/contacto/crearContacto', contactoControllers.crearContacto);
router.get('/contacto/obtener-lista-contactos', contactoControllers.obtenerContactos);
router.get('/contacto/obtener-contacto', contactoControllers.obtenerContacto);
router.put('/contacto/actualizar-contacto/:id', contactoControllers.actualizarContacto);
router.delete('/contacto/borrar-contacto/:id', contactoControllers.borrarContacto);

router.post('/televisor/elevisorCrear', televisoresControllers.televisorCrear);
router.get('/televisor/televisor-obtener', televisoresControllers.televisorObtener);
router.get('/televisor/listas-televisores', televisoresControllers.listasTelevisores);
router.put('/televisor/actualizar-televisor', televisoresControllers.actualizarTelevisor);
router.delete('/televisor/borrar-televisor', televisoresControllers.borrarTelevisor)

router.post('/computador/crearComputadores', computadoresControllers.crearComputadores)
router.get('/computador/obtenerComputadores', computadoresControllers.obtenerContactos)
router.get('/computador/obtener_producto', computadoresControllers.obtener_computador)
router.put('/computador/actualizarComputador/:id', computadoresControllers.actualizarComputador)
router.delete('/computador/borrarComputador/:id', computadoresControllers.borrarComputador)

router.post('/camaras/crearCamaras', camarasControllers.crearCamaras)
router.get('/camaras/obtenerCamaras', camarasControllers.obtenerCamaras)
router.get('/camaras/obtener_camaras', camarasControllers.obtener_camaras)
router.put('/camaras/actualizarCamaras/:id', camarasControllers.actualizarCamaras)
router.delete('/camaras/borrarCamaras/:id', camarasControllers.borrarCamaras)

router.post('/consolas/crearConsolas', consolasControllers.crearConsolas)
router.get('/consolas/obtenerConsolas', consolasControllers.obtenerConsolas)
router.get('/consolas/obtener_consolas', consolasControllers.obtener_consolas)
router.put('/consolas/actualizarConsolas/:id', consolasControllers.actualizarConsolas)
router.delete('/consolas/borrarConsolas/:id', consolasControllers.borrarConsolas)

module.exports=router;