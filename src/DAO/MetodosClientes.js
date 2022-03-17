import { bdClientes } from "../model/cliente.js";

class MetodosClientes {
  //Método create.
  postTabela() {
    try {
      return new Promise((resolve, reject) => {
        const scriptCriarTabela = `
            CREATE TABLE IF NOT EXISTS clientes (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                nome VARCHAR(50),
                genero VARCHAR(20),
                data_nascimento DATE,
                cpf INTEGER,
                telefone VARCHAR(20)
            )`;

        bdClientes.run(scriptCriarTabela, (e) => {
          if (!e) {
            resolve("Tabela criada com sucesso.");
          } else {
            reject("Erro ao criar tabela.");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Create
  criarCliente(nome, genero, data_nascimento, cpf, telefone) {
    try {
      return new Promise((resolve, reject) => {
        const scriptInsertCliente = `
            INSERT INTO clientes (nome, genero, data_nascimento, cpf, telefone) VALUES
            ('${nome}', '${genero}', ${data_nascimento}, ${cpf}, ${telefone})
        `;
        bdClientes.run(scriptInsertCliente, (e) => {
          if (!e) {
            resolve(`Dados do cliente
                nome: ${nome}
                inserido com sucesso`);
          } else {
            reject("Erro ao salvar dados do Cliente.");
          }
        });
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  //Método Read
  async buscarTodosClientes() {
    try {
      return new Promise((resolve, reject) => {
        const scriptSelectClientes = `SELECT * FROM clientes`;
        bdClientes.all(scriptSelectClientes, (e, rows) => {
          if (!e) {
            resolve(rows);
          } else {
            reject("Problema ao obter dados");
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
              reject("Nenhum registro encontrado");
            }
          } else {
            reject("Não foi possível acessar o banco de dados");
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
        const scriptDelete = `DELETE FROM funcionarios WHERE id = ${id}`;
        bdClientes.run(scriptDelete, (e) => {
          if (!e) {
            resolve("Registro deletado com sucesso");
          } else {
            reject("Não foi possível deletar o registro");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  //Método Update
  async atualizarCliente(
    id,
    novoNome,
    novoGenero,
    novoData_nascimento,
    novoCpf,
    novoTelefone
  ) {
    try {
      return new Promise((resolve, reject) => {
        const scriptUpdate = `UPDATE clientes SET nome='${novoNome}', genero='${novogenero}', data_nascimento=${novodata_nascimento}, cpf=${novoCpf}, telefone=${novotelefone} WHERE id = ${id}`;
        bdClientes.run(scriptUpdate, (e) => {
          if (!e) {
            resolve("Registro atualizado com sucesso");
          } else {
            reject("Não foi possível atualizar o registro");
          }
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  }
}

export default MetodosClientes;
