/*console.log(nome);
const nome = 'Bryan T T';

console.log("Keep going") // não acontece pois para tudo por causa do erro acima 
*/
class CustomError extends Error{
    constructor({MessageChannel, data}) {
        super(message);
        this.data = data;
    }
}

try {
    const nome = 'Bryan T T';
    // const myError = new Error('Custom message') // podemos criar o nosso prórprio errp
    //throw myError

    const myError = new CustomError({
        message: 'Mensagem de erro',
        data: {
            type: 'Server error'
        }
    });
} catch(err) {
    console.log('Erro:' + err)
    if(err.data.type ==='Server erro') {
        console.log('erro no servidor')
    }
} finally {
    console.log("Keep going")
}


