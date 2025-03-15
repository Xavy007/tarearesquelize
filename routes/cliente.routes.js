const express = require('express'); 
const router = express.Router(); 
const { obtenerClientes, crearCliente,obtenerClienteId,actualizarClienteId,eliminarCliente } = require('../controllers/cliente.controller'); 
router.get('/clientes', obtenerClientes); 
router.post('/clientes', crearCliente); 

router.get('/clientes/:id', obtenerClienteId); 
router.put('/clientes/:id', actualizarClienteId); 
router.delete('/clientes/:id', eliminarCliente); 
 


module.exports = router; 