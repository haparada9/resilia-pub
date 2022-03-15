import { Router } from 'express';
import ClientesController from '../controller/ClientesController.js';

const router = Router();
const clientes = new ClientesController()

router.post("/criarTabela", clientes.criarTabela)

router.get("/clientes", clientes.buscarTodosClientes)

router.post("/clientes", clientes.salvarClientes)

router.get("/clientes/:id", clientes.buscarClientesId)

export default router;