// Arquivo com os comandos em js

/**
 * Conteúdo importante
 * 
 * 
 */

 function validaNumerosPares(array) {
    let valorRetorno = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            valorRetorno.push(array[i]);
        }else{
            console.log(array[i]);      // retorna os valores que não são impar
        }
    }
    console.log(valorRetorno);
}

let array = [1,3,4,5,7,8];
validaNumerosPares(array);
