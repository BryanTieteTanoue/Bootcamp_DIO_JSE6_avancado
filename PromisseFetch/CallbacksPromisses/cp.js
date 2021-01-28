//Promisses
//objeto para processamento assincrono
const doSomethingPromise = () => //ao usar 'arrow function' ou seja transforma em função, elas funcionam melhor
new Promise((resolve, rejected) => {
    setTimeout(function() {
        //fez alguma coisa
        resolve('First data');
    }, 1500);
});

const doOtherSomethingPromise = () =>
new Promise((resolve, rejected) => {
    setTimeout(function() {
        //fez alguma coisa
        resolve('Second data');
    }, 1000);
});

Promise.all([doSomethingPromise(), doOtherSomethingPromise()]).then(data => {
    console.log(data);
}) //com isso as duas são executadas ao mesmo tempo

Promise.race([doSomethingPromise(), doOtherSomethingPromise()]).then(data => {
    console.log(data); // o race retorna a que executar primeiro, mexes nos tempos
})
/*
//Promisses permitem tratamento lehor de erros
doSomethingPromise
    .then(data => { 
        console.log(data);  return doOtherSomethingPromise;
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error));

//3 estados das promisses
//Pending - em execução
//Fulfied - terminou de executar
//Rejected - deu erro
*/