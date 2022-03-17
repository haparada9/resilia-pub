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
   async buscarTodosClientes(req, res){
      const scriptSelect = `SELECT * FROM clientes`
      try{
         const results = await new Promise((resolve, reject) => {         
            return (
               bdClientes.all(scriptSelect, (e, rows) => {
                  if(!e){
                     resolve(rows)
                  } else {
                     reject("Problema ao obter dados")
                  }
               })
            )         
         })

         res.status(200).json(results)

      } catch(error) {
         res.status(500).json(error)
      }
   }

//Método Read
buscarClientesId(req, res) {
   try{
      const id = req.params.id
      const script = `SELECT * FROM clientes WHERE id = ${id}`
      bdClientes.get(script, (e, row) => {
         if(!e) {
            if(row != undefined){
               res.status(200).json(row)
            }else {
         res.status(404).send("Nenhum registro encontrado")
      }
   }else {
      res.status(404).send("Banco de dados não acessível")
   }
   }) 
   }  catch(error){
         console.error(error)
   }
}

//Método DELETE.
excluirClientes(req, res){
   try{
      const id = parseInt(req.params.id)
      const script = `DELETE FROM clientes WHERE id = ${id}`
      bdClientes.run(script, (e) => {
         if(!e){
            res.status(200).send("Registro deletado com sucesso")
         } else {
            res.status(404).send("Não foi possivel deletar o registro")
         }
      })
   } catch(error){
      console.error(error)
   }
}

//Método UPDATE.
async atualizarCliente(req, res){
   try{
      const novoCliente = await new Promise((resolve, reject) => {
         const result = {
            nome: req.body.nome,
            genero: req.body.genero,
            data_nascimento: req.body.data_nascimento,
            cpf: parseInt(req.body.cpf),
            telefone: parseInt(req.body.telefone)
         }
         return resolve(result)
      })

      const id = req.params.id

      const script = `UPDATE clientes SET nome = '${novoCliente.nome}', genero = '${novoCliente.genero}', data_nascimento = ${novoCliente.data_nascimento}, cpf = ${novoCliente.cpf}, telefone = ${novoCliente.telefone} WHERE id = ${id}`
      
      bdClientes.run(script, (e) => {
         if(!e){
            res.status(200).send("Registro atualizado com sucesso")
         } else {
            res.status(404).send("Não foi possivel atualizar o registro")
            console.log(e)
         }
      })
   } catch(error){
      console.error(error)
   }
}


}


export default ClientesController;