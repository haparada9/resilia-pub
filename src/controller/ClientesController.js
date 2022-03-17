import { bdClientes } from '../model/clientes.js';
import MetodosClientes from '../DAO/MetodosClientes.js';
import { verificaDadosClientes}  from '../services/verificaDadosValidos.js';

const metodos = new MetodosClientes();
class ClientesController{

   //Método Create 
   createTable(req, res){
      metodos.postTable()
      .then(response => res.send(response))
      .catch(response => res.send(response))
   }     

   //Método Create 
   async saveCliente(req, res){
     const dataCliente = await new Promise ((resolve, reject) => {
        resolve([
           req.body.nome,
           req.body.genero,
           req.body.data_nascimento,
           req.body.cpf,
           req.body.telefone
        ]);
        reject("Não foi possível pegar as informações do cliente")
     })

     metodos.postCliente(...dataFuncionario)
     .then(response => res.send(response))
     .catch(response => res.send(response))
   }

   //Método Read ----------------------
   async getClientes(req, res){
      metodos.getAllClientes()
      .then(response => res.send(response))
      .catch(response => res.send(response))
   }


   //Método Read --------------------
   getClienteId(req, res){
      const id = req.params.id
      metodos.getClienteId(id)
      .then(response => res.send(response))
      .catch(response => res.send(response))  
   }


//Método DELETE.
deleteCliente(req, res){
   const id = req.params.id
   metodos.deleteCliente(id)
   .then(response => res.send(response))
   .catch(response => res.send(response)) 
}

//Método UPDATE.
async updateCliente(req, res){
   const novoCliente = await new Promise((resolve, reject) => {         
      resolve([
         req.params.id,
         req.body.nome,
         req.body.cargo,
         parseFloat(req.body.salario),
         parseInt(req.body.cpf)
      ])
   })
   metodos.updateCliente(...novoCliente)
   .then(response => res.send(response))
   .catch(response => res.send(response))       
}


}


export default ClientesController;