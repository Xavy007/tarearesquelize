const { Cliente } = require('../models');

exports.obtenerClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
};
exports.crearCliente = async (req, res) => {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);

};

exports.obtenerClienteId = async (req, res) => {
    const clienteId = parseInt(req.params.id);
    const clientes = await Cliente.findAll();
    const cliente = clientes.find(c => c.id === clienteId);
    if (!cliente) return res.status(404).send('Cliente no encontrado');
    res.status(200).json(cliente);

};
exports.actualizarClienteId = async (req, res) => {
    const clientes = await Cliente.findAll();
    const cliente = clientes.find(u => u.id === parseInt(req.params.id));
    if (!cliente) return res.status(404).send('Cliente no encontrado');
    const { nombre, correo } = req.body;
    cliente.nombre = nombre || cliente.nombre;
    cliente.correo = correo || cliente.correo;
    cliente.save();
    res.status(200).json(cliente);
};
exports.eliminarCliente = async (req, res) => {
   const count = await Cliente.destroy({ where: { id: parseInt(req.params.id) } }); 
   console.log(count) 
   if(count === 0) return res.status(404).send("Cliente no encontrado")
   res.status(200).json('cliente Eliminado');
};

