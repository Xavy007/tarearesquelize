const express = require('express'); 
const router = express.Router(); 
const { obtenerPedidos, crearPedido,obtenerPedidoId,actualizaPedidoId,eliminarPedido} = require('../controllers/pedido.controller'); 
router.get('/pedidos', obtenerPedidos); 
router.post('/pedidos', crearPedido); 
router.get('/pedidos/:id',obtenerPedidoId);
router.put('/pedidos/:id',actualizaPedidoId);
router.delete('/pedidos/:id',eliminarPedido);


module.exports = router; 