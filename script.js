// 1. Imprime todos os números de 1 a 100
let numeros1a100 = "";
for (let i = 1; i <= 100; i++) {
    numeros1a100 += i + (i % 10 === 0 ? "<br>" : ", ");
}
document.getElementById("numeros1a100").innerHTML = numeros1a100;

// 2. Imprime os múltiplos de 3 entre 1 e 100
let multiplosDe3 = "";
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        multiplosDe3 += i + (i % 10 === 0 ? "<br>" : ", ");
    }
}
document.getElementById("multiplosDe3").innerHTML = multiplosDe3;

// 3. Soma de todos os números pares de 50 a 100
let somaPares = 0;
for (let i = 50; i <= 100; i += 2) {
    somaPares += i;
}
document.getElementById("somaPares").innerHTML = "A soma é: " + somaPares;

// 4. Função para calcular o fatorial de um número
function fatorial(n) {
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}
document.getElementById("fatorial").innerHTML = "O fatorial de 4 é: " + fatorial(4);

// 5. Função para calcular média ponderada
function mediaPonderada(nota1, nota2, nota3, peso1, peso2, peso3) {
    let totalPeso = peso1 + peso2 + peso3;
    return ((nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / totalPeso).toFixed(1);
}
document.getElementById("mediaPonderada").innerHTML = "A média ponderada é: " + mediaPonderada(10, 9, 8, 3, 2, 5);

// 6. Série Fibonacci (primeiros 10 números)
function fibonacci(limite) {
    let fib = [0, 1];
    for (let i = 2; i < limite; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.join(", ");
}
document.getElementById("fibonacci").innerHTML = "Fibonacci: " + fibonacci(10);

// 7. Função que retorna a soma de um intervalo
function somaIntervalo(inicio, fim) {
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
        soma += i;
    }
    return soma;
}
document.getElementById("somaIntervalo").innerHTML = "Soma de 5 a 10: " + somaIntervalo(5, 10);

// 8. Sequência de Collatz para um valor inicial
function collatz(x) {
    let resultado = x;
    let sequencia = resultado;
    while (resultado !== 1) {
        if (resultado % 2 === 0) {
            resultado /= 2;
        } else {
            resultado = 3 * resultado + 1;
        }
        sequencia += " → " + resultado;
    }
    return sequencia;
}
document.getElementById("collatz").innerHTML = "Sequência para x = 13: " + collatz(13);
