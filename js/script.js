// Arquivo com os comandos em js

/**
 * Conteúdo importante
 * 
 * 
 */


// comando para pegar o terceiro titulo e mudar de cor
 var head1 = document.getElementsByTagName('h1')[2];        
 head1.style.color = 'red';

 function contador(opcao) {
     var valorMudarElemento = document.getElementById('valor');
     console.log(opcao);
     var valor = valorMudarElemento.innerHTML;
     if (opcao == 's') {
        ++valor;
        valorMudarElemento.innerHTML = valor;
     } else {
        --valor;
        valorMudarElemento.innerHTML = valor;
     }
 }

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
