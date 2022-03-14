export function verificaDadosClientes(dados){

   if(dados.nome == undefined || dados.genero == undefined || dados.data_nascimento == undefined || dados.cpf == undefined || dados.telefone == undefined){
      return false
   }
   else if(typeof dados.nome != "string" || typeof dados.genero != "string" || typeof dados.data_nascimento != "string" || typeof dados.cpf != "number" || typeof dados.telefone !="string" ){
      return false
   }
   else {
      return true
   }


}