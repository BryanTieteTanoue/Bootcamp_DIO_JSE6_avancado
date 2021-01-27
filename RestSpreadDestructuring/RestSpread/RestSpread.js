//rest operator ...

function sum(...args) {
    
    /* jeito antigo de resolver o problema de passar mais parãmetros do que o previsto
    var value = 0;

    //arguments pegava tudo que era passado
    for (var i = 0; i <arguments.length; i++){
        value += arguments[i];
    }

    return value;
    */
    //com o rest ele retorna uma lista com os métodos de lista
    //reduce é um método para fazer contas com todos os elementos de um array
    return args.reduce((acc, value) => acc + value, 0);
}

//rest pode ser usado para pegar o "resto" também
const sum2 = (a, b, ...rest) => {
    console.log(a, b, rest);
}

//spread operator, ele faz o inverso de rest (tem a mesma indicação "..."), tranforma itens de um array em parâmetros
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum3 = (...rest) =>{
    return multiply(...rest);
}

console.log(sum(5, 6, 8 , 9 , 10));
console.log(sum2(5, 6, 8 , 9 , 10));
console.log(sum3(5, 6, 8 , 9 , 10));

//funciona em strings, arrays, literral objects e onjetos iterativos
const str = 'Digital Innovation One';
const arr = [1,2,3,4];

function logArgs(...args){
    console.log(args);
}

//const arr2 = arr.concat([5,6,7]); jeito antigo
const arr2 = [...arr, 5, 6, 7];
const arr3 = [...arr2, ...arr, 0,0,0];

logArgs(...str); //transforma a String em parâmetros
logArgs(...arr); //transforma o array em parâmetros
console.log(arr2);
console.log(arr3);

const object = {
    test: '123'
};

const object2 = {
    ...object, //usando o spread podemos dar um novo atributo ao objeto usando propriedade de outro objeto

    test2: 'hello'
};

//const arr = [...obj] // não funciona

console.log(object2);