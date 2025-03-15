const { Pedido } = require('../models'); 
exports.obtenerPedidos = async (req, res) => { 
const pedidos = await Pedido.findAll(); 
res.json(pedidos); 
}; 
exports.crearPedido = async (req, res) => { 
const pedido = await Pedido.create(req.body); 
res.status(201).json(pedido); 
};

exports.obtenerPedidoId= async(req,res)=>{
    const pedidoId = parseInt(req.params.id);
    const pedidos = await Pedido.findAll();
    const pedido = pedidos.find(c => c.id === pedidoId);
    if (!pedido) return res.status(404).send('Pedido no encontrado');
    res.status(200).json(pedido);
}
exports.actualizaPedidoId= async(req,res)=>{
    const pedidos= await Pedido.findAll();
    const pedido = pedidos.find(u => u.id === parseInt(req.params.id));
    if (!pedido) return res.status(404).send('Pedido no encontrado');
    const { total, fecha } = req.body;
    pedido.total = total || pedido.total;
    pedido.fecha = fecha || pedido.fecha;
    pedido.save();
    res.status(200).json(pedido);
}
exports.eliminarPedido= async(req,res)=>{
    const count = await Pedido.destroy({ where: { id: parseInt(req.params.id) } }); 
    console.log(count) 
    if(count === 0) return res.status(404).send("Pedido no encontrado")
    res.status(200).json('pedido Eliminado');
}