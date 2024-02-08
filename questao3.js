const faturamentoDiario = [1000, 1500, 1200, 0, 2000, 1800, 0, 2500, 2200, 1700, 1900, 2100, 2300, 0, 1600, 1400, 2600, 2400, 0, 2700, 2800, 0, 2900, 3000];

function menorFaturamentoDiario(faturamento) {
    return Math.min(...faturamento.filter(valor => valor > 0));
}

function maiorFaturamentoDiario(faturamento) {
    return Math.max(...faturamento);
}

function calcularMediaMensal(faturamento) {
    const diasComFaturamento = faturamento.filter(valor => valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((total, valor) => total + valor, 0);
    return somaFaturamento / diasComFaturamento.length;
}

function contarDiasAcimaDaMedia(faturamento) {
    const media = calcularMediaMensal(faturamento);
    return faturamento.filter(valor => valor > media).length;
}

console.log("Menor valor de faturamento diário:", menorFaturamentoDiario(faturamentoDiario));
console.log("Maior valor de faturamento diário:", maiorFaturamentoDiario(faturamentoDiario));
console.log("Número de dias com faturamento superior à média mensal:", contarDiasAcimaDaMedia(faturamentoDiario));
