// Arquivo com os comandos em js

/**
 * Conteúdo importante
 * 
 * 
 */


// comando para pegar o terceiro titulo e mudar de cor
 var head1 = document.getElementsByTagName('h1')[2];        
 head1.style.color = 'red';

 //
 var porcent = document.querySelector('')

 function contador(opcao) {
     var valorMudarElemento = document.getElementById('valor');     //conteudo HTML
     var valor = valorMudarElemento.innerHTML;                      //valor que contem
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
function loadingShow() {
    const div = document.createElement('div');      //comando para criar uma tag
    div.classList.add('loading');                        // comando para adicionar uma class
    
    const label = document.createElement('label');
    label.innerText = ("Carregando...");

    div.appendChild(label);

    document.body.appendChild(div);                       // comando para incluir alguma div

    setTimeout (() => loadingRemove(),2000);
}
function loadingRemove() {
    var loadings = document.getElementsByClassName('loading');
    if (loadings.length) {
        loadings[0].remove();
    }
}

let array = [1,3,4,5,7,8];
validaNumerosPares(array);
