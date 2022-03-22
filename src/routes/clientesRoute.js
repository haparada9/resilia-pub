import { Router } from 'express';
import ClientesController from '../controller/ClientesController.js';


const router = Router();
const clientes = new ClientesController()


router.post("/criarTabela", clientes.createTable)

router.get("/clientes", clientes.getClientes)

router.post("/salvarCliente", clientes.saveCliente)

router.get("/buscarClientes/:id", clientes.getClienteId)

router.delete("/deletarCliente/:id", clientes.deleteCliente)

router.put("/atualizarCliente/:id", clientes.updateCliente)

export default router;