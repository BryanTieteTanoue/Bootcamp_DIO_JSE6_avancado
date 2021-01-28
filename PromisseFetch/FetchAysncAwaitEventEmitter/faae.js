
/*fetch('/data.json').then(responseStream => {
    console.logr(responseStream);
});

//o 'fetch' só da um erro na promise em caso de problema de rede
*/
//Async / await
//cria promisses de maniera mais simples e lidar com promisses detro de promisses

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFun = async () => {
    const data = await asyncTimer(); // await faz o computador esperar uma promessa ser cumprida
    return data;
}; // isso já uma promisse, só por causa do async

simpleFun().then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
});
    
