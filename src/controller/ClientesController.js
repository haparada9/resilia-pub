import MetodosClientes from "../DAO/MetodosClientes.js";

const metodos = new MetodosClientes();
class ClientesController {
  //Método Create
  createTable(req, res) {
    metodos
      .postTable()
      .then((response) => res.status(200).json(response))
      .catch((response) => res.status(400).json(response));
  }

  //Método Create
  async saveCliente(req, res) {
    const dataCliente = await new Promise((resolve, reject) => {
      resolve([
        req.body.nome,
        req.body.genero,
        req.body.data_nascimento,
        parseInt(req.body.cpf),
        parseInt(req.body.telefone)
      ]);
      reject("Não foi possível pegar as informações do cliente");
    });

    metodos
      .postCliente(...dataCliente)
      .then((response) => res.status(200).json(response))
      .catch((response) => res.status(400).json(response));
  }

  //Método Read
  async getClientes(req, res) {
    metodos
      .getAllClientes()
      .then((response) => res.status(200).json(response))
      .catch((response) => res.status(400).json(response));
  }

  //Método Read
  getClienteId(req, res) {
    const id = req.params.id;
    metodos
      .getClienteId(id)
      .then((response) => res.status(200).json(response))
      .catch((response) => res.status(400).json(response));
  }

  //Método DELETE
  deleteCliente(req, res) {
    const id = req.params.id;
    metodos
      .deleteCliente(id)
      .then((response) => res.status(200).json(response))
      .catch((response) => res.status(400).json(response));
  }

  //Método UPDATE
  async updateCliente(req, res) {
    const novoCliente = await new Promise((resolve, reject) => {
      resolve([
        req.params.id,
        req.body.nome,
        req.body.genero,
        req.body.data_nascimento,
        parseInt(req.body.cpf),
        parseInt(req.body.telefone)
      ]);
    });
    metodos
      .updateCliente(...novoCliente)
      .then((response) => res.status(200).json(response))
      .catch((response) => res.status(400).json(response));
  }
}

export default ClientesController;
