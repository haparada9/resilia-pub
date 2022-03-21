import { bdClientes } from "../model/clientes.js";

class MetodosClientes {
  //Método create.
  postTable() {
    try {
      return new Promise((resolve, reject) => {
        const scriptCreateTable = `
            CREATE TABLE IF NOT EXISTS clientes (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                nome VARCHAR(50),
                genero VARCHAR(20),
                data_nascimento DATE,
                cpf INTEGER,
                telefone VARCHAR(20)
            )`;

        bdClientes.run(scriptCreateTable, (e) => {
          if (!e) {
            resolve({mensagem:"Tabela criada com sucesso."});
          } else {
            reject({mensagem:"Erro ao criar tabela."});
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Create
  postCliente(nome, genero, data_nascimento, cpf, telefone) {
    try {
      return new Promise((resolve, reject) => {
        const scriptInsertCliente = `
            INSERT INTO clientes (nome, genero, data_nascimento, cpf, telefone) VALUES
            ('${nome}', '${genero}', ${data_nascimento}, ${cpf}, ${telefone})
        `;
        bdClientes.run(scriptInsertCliente, (e) => {
          if (!e) {
            resolve({mensagem:`Dados do cliente nome: ${nome} inserido com sucesso`});
          } else {
            reject({mensagem:"Erro ao salvar dados do Cliente."});
          }
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  //Método Read
  async getAllClientes() {
    try {
      return new Promise((resolve, reject) => {
        const scriptSelectClientes = `SELECT * FROM clientes`;
        bdClientes.all(scriptSelectClientes, (e, rows) => {
          if (!e) {
            resolve(rows);
          } else {
            reject({mensagem:"Problema ao obter dados"});
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Read
  getClientesId(id) {
    try {
      return new Promise((resolve, reject) => {
        const scriptSelectClienteId = `SELECT * FROM clientes WHERE id = ${id}`;
        bdClientes.get(scriptSelectClienteId, (e, row) => {
          if (!e) {
            if (row != undefined) {
              resolve(row);
            } else {
              reject({mensagem:"Nenhum registro encontrado"});
            }
          } else {
            reject({mensagem:"Não foi possível acessar o banco de dados"});
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método delete
  deleteCliente(id) {
    try {
      return new Promise((resolve, reject) => {
        const scriptDelete = `DELETE FROM clientes WHERE id = ${id}`;
        bdClientes.run(scriptDelete, (e) => {
          if (!e) {
            resolve({mensagem:"Registro deletado com sucesso"});
          } else {
            reject({mensagem:"Não foi possível deletar o registro"});
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Update
  async updateCliente(
    id,
    novoNome,
    novoGenero,
    novoData_nascimento,
    novoCpf,
    novoTelefone
  ) {
    try {
      return new Promise((resolve, reject) => {
        const scriptUpdate = `UPDATE clientes SET nome='${novoNome}', genero='${novoGenero}', data_nascimento=${novoData_nascimento}, cpf=${novoCpf}, telefone=${novoTelefone} WHERE id = ${id}`;
        bdClientes.run(scriptUpdate, (e) => {
          if (!e) {
            resolve({mensagem:"Registro atualizado com sucesso"});
          } else {
            reject({mensagem:"Não foi possível atualizar o registro"});
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }
}

export default MetodosClientes;
