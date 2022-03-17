import { bdClientes } from "../model/cliente.js";

class MetodosClientes {
  //Método create.
  criarTabela() {
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
}
