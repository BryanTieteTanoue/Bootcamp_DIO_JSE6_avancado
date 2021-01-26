//lazy evaluation
//invoca a função apenas quando a função "multiply" não tem todos os parâmetros
function randomNumber() {
    console.log("Gerando um núemro alatório...");
    return Math.random() *10 ;
}

// com um simples igula nos parâmetros deixamos um valor padrão para caso não seja preenchido
function multiply(a = 1, b = randomNumber()){
    // b = b || 1; evitaria erros caso não fosse inserido o segundo número
    return a * b;
}

console.log(multiply(5));
console.log(multiply(4,5));