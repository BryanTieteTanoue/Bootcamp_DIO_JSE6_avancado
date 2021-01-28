var cont = 0;

function adicionar(){
    document.getElementById('contador').innerHTML = "Contador: " + (++cont);
}

function subtrair(){
    document.getElementById('contador').innerHTML = "Contador: " + (--cont);
}

//Console

console.log('Algum text');
console.warn('aleerta');// da um alerta no console, fundo amarele
console.error('erro'); // mostra como se foose um erro

console.trace(); //mostra onde o código foi executado

console.group('Meu grupo'); // agrupa comandos "console"
console.log("1");
console.log("2");
console.groupEnd('Meu grupo');

console.time() //serve para mostra quanto demorou para fazer uma ação

console.table(); //coloca objetos em forma de tabela para melhorvisualização
console.assert(1 === 1, 'ops'); //testa uma condição

console.log('%c log estilizado','color: blue; font-size: 40px'); //estiliza o o console