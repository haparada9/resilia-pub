# Resilia Pub - API

O Resilia-PUB é uma API Rest de gerenciamento de PUBS. Cada colaborador ficou responsável por criar uma instância do banco de dados da API e posteriormente iremos usar os conhecimentos obtidos para juntarmos todas as instâncias e criar os seus relacionamentos. Com essa aplicação você será capaz de salvar, atualizar, pesquisar e deletar registros de funcionários do PUB.

# Ferramentas utilizadas

<div>
   <img width='50px' height='50px' src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg'>
   <img width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg'>
   <img width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg'>
   <img width='50px' height='50px' style="background-color: #FFF; margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/markdown/markdown-original.svg'>
   <img width='100px' height='50px' style="background-color: #FFF; margin: 5px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/382px-SQLite370.svg.png'>
   <img width='50px' height='50px' style="margin: 5px" src='https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/vscode/vscode-original.svg'>
   <img width='50px' height='50px' style="margin: 5px" src='https://cdn.freelogovectors.net/wp-content/uploads/2020/12/postman-logo.png'>
</div>


# Como utilizar a aplicação

### **1 - Faça o clone do repositório**

Para fazer o clone desse repositório basta copiar o código abaixo e colar em seu terminal.
```
git clone https://github.com/haparada9/resilia-pub.git
```

### **2 - Instale as dependencias necessárias**

Para realizar a instalação das dependencias necessárias, entre na pasta do projeto, e, no terminal, execute o comando abaixo:
```
npm install
```

### **3 - Execute a aplicação**

Para executar a aplicação, basta executar o comando abaixo em seu terminal.
```
npm start
```
**Observação:** Essa aplicação será executada por padrão na porta 3000 do seu localHost, caso essa porta esteja sendo utilizada por outra aplicação basta mudar o valor da variável 'port' do arquivo 'app.js' para um valor de porta disponível em seu sistema.

# Rotas da API

Essa aplicação possui um conjunto de rotas que torna possível o uso de todos os verbos HTTP necessários para a realização do CRUD.

### **1 - Salvar as informações de um cliente**

Para salvar um cliente na API é usado o método HTTP `POST` no caminho `urlApi/salvarCliente`.

Deverá ser passado no corpo da requisição as informações do cliente em formato JSON segundo o modelo e propriedades abaixo:
```
{
   "nome": "Hugo Parada",
   "genero": "masculino",
   "data_nascimento": 26121992,
   "cpf": 14532121879,
   "telefone": 21965055544
}
``` 
### **2 - Atualizar as informações de um cliente**

Para atualizar as informações um cliente na API é usado o método HTTP `PUT` no caminho `urlApi/atualizarCliente/:id`.

Deverá ser passado como parâmetro um id existente no banco de dados na url da requisição e no corpo da requisição as informações do cliente em formato JSON segundo o modelo e propriedades abaixo:
```
{
   "nome": "Hugo Parada",
   "genero": "masculino",
   "data_nascimento": 26121992,
   "cpf": 14532121879,
   "telefone": 21965055544
}
``` 

### **3 - Deletar as informações de um cliente**

Para deletar as informações um cliente na API é usado o método HTTP `DELETE` no caminho `urlApi/deletarCliente/:id`.

Deverá ser passado como parâmetro um id existente no banco de dados na url da requisição.

### **4 - Buscar as informações de apenas um cliente**

Para buscar as informações um cliente na API é usado o método HTTP `GET` no caminho `urlApi/buscarClientes/:id`.

Deverá ser passado como parâmetro um id existente no banco de dados na url da requisição e a API retornará os dados do cliente em formato JSON como o **exemplo** a seguir:

`http://localhost:3000/buscarClientes/18`
```
{
    "nome": "Hugo Parada",
    "genero": "masculino",
    "data_nascimento": 26121992,
    "cpf": 14532121879,
    "telefone": 21965055544
}
```

### **5 - Buscar as informações de todos os clientes**

Para buscar as informações de todos os clientes na API é usado o método HTTP `GET` no caminho `urlApi/clientes`.

A API retornará um array de objetos em formato JSON como o exemplo abaixo:
```
[
    {
        "id": 1,
        "nome": "Hugo Parada",
        "genero": "Masculino",
        "data_nascimento": 26121992,
        "cpf": 14532121879,
        "telefone": 21965055544
    },
    {
        "id": 2,
        "nome": "Paula Dentino",
        "genero": "Feminino",
        "data_nascimento": 27071994,
        "cpf": 84721436795,
        "telefone": 21958774455
    },
    {
        "id": 3,
       "nome": "Gabriel Barbosa",
        "genero": "Masculino",
        "data_nascimento": 11021998,
        "cpf": 32147864239,
        "telefone": 21987044499
    },
    {
        "id": 4,
        "nome": "Maria Aparecida Resende Dentino",
        "genero": "Feminino",
        "data_nascimento": 25071962,
        "cpf": 59745132987,
        "telefone": 21987235597
    },
    {
        "id": 5,
        "nome": "Humberto Gessinger",
        "genero": "Masculino",
        "data_nascimento": 14091977,
        "cpf": 29742963371,
        "telefone": 21965357729 
    }
]
```
# Integrantes do projeto

- [@Arcenio Souza](https://github.com/ArcenioSouza)
- [@Gicelle Sena](https://github.com/Gicelle-sena)
- [@Matheus Camba](https://github.com/MatheusCamba)
- [@Milena Souza](https://github.com/Milena2712).