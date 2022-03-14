import { bdClientes } from '../model/clientes.js';
import { verificaDadosClientes } from '../services/verificaDadosValidos.js';

class ClientesController{

   //Método Create --------------------
   criarTabela(req, res){
      const tabela_clientes = `
         CREATE TABLE IF NOT EXISTS clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            nome VARCHAR(50),
            genero VARCHAR(20),
            data_nascimento DATE,
            cpf INTEGER,
            telefone VARCHAR(20)
         )
      `;

      return new Promise((resolve, reject) => {
         return resolve(
            bdClientes.run(tabela_clientes, (e) => {
               try{
                  if(!e){
                     res.status(201)
                     res.send("Tabela criada com sucesso")
                  }                 
               }
               catch {
                  res.status(401)
                  res.send("Erro ao criar tabela ", e.message)
               }              
            })
         )
      })

   }

   //Método Create --------------------
   async salvarClientes(req, res) {
      try{
         const cliente = await new Promise((resolve, reject) => {
         
            const result = {
               nome: req.body.nome,
               genero: req.body.genero,
               data_nascimento: req.body.data_nascimento,
               cpf: parseInt(req.body.cpf),
               telefone: parseInt(req.body.telefone)
            }
            
            //const verificacaoDosDados = verificaDadosClientes(result)
            resolve(result)
            //if(verificacaoDosDados === true){
              
            //} else (
               //reject()
            //)
         })
         
         const infoClientes = `
         INSERT INTO clientes (nome, genero, data_nascimento, cpf, telefone) VALUES 
            ('${cliente.nome}', '${cliente.genero}', ${cliente.data_nascimento}, ${cliente.cpf}, ${cliente.telefone}) 
         `;

         bdClientes.run(infoClientes, (e) => {
            if (!e) {
               res.status(201)
               res.send(
               `Dados do cliente 
               nome: ${cliente.nome}                
               inseridos com sucesso`
               );
            }
         });
      } catch (error){
         res.status(500)
         res.send("Erro ao salvar dados do Cliente")
      }
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
}

export default ClientesController;