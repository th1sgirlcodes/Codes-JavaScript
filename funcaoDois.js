// Funções de Alta Ordem
// Recebem uma ou mais funções como argumento
// Recebem uma função como resultado

function aplicarOperacao(x, operacao) { //função de alta ordem porque recebeu função DOBRAR como argumento
    return operacao(x);
}

function dobrar(numero) {  //dobrar é igual a 5
    return numero * 2;
}

const resultado = aplicarOperacao(5, dobrar); //resultado é 10 pois 5 dobrado é 10
console.log(resultado);

// Recebem uma função como resultado

function criarIncrementador(incremento) {  // Função de alta ordem
    return function(numero) {  // retorna uma nova função sem nome que é anonima
        return numero + incremento;
    };
}

const incrementoPor2 = criarIncrementador(2); //criando nova função onde valor é fixado em 2
console.log(incrementoPor2(5)); // passa o 5 como argumento do numero do returno

