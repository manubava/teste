// Questão 2:

// Função que calcula a sequência Fibonacci até o número informado.
function calcularFibonacci(numero) {
    let primeiro = 0;
    let segundo = 1;
    let proximo = primeiro + segundo;

    while (proximo <= numero) {
        if (proximo === numero) {
            return true;
        }
        primeiro = segundo;
        segundo = proximo;
        proximo = primeiro + segundo;
    }
    return false;
}

//Informar um número:
const numero = 21; 

if (calcularFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
