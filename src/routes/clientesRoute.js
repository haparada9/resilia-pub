import { Router } from 'express';
import ClientesController from '../controller/ClientesController.js';

const router = Router();
const clientes = new ClientesController()

router.post("/criarTabela", clientes.createTable)

router.get("/clientes", clientes.getClientes)

router.post("/clientes", clientes.saveCliente)

router.get("/clientes/:id", clientes.getClienteId)

router.delete("/clientes/:id", clientes.deleteCliente)

router.put("/clientes/:id", clientes.updateCliente)

export default router;