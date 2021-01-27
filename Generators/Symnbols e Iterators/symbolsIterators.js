//Symbols são identificadores únicos

const uniqueId = Symbol('Hello'); //o "hello" não representa seu contúdo

/*
const obj = {
    [uniqueId]: 'Hello' //meio que torna ele private, mas não é
};

console.log(obj);*/

//Well know symbols, adicionam metapropriedades aos objetos
Symbol.iterator //torna um objeto iteravel
Symbol.split    //torna o objeto "divisil", exemplo separar strings
Symbol.toStringTag
/*
const obj = {
    [Symbol.iterator]() 
};*/

const arr = [1,2,3,4];
const it = arr[Symbol.iterator](); //'it' é 'arr' mas iterável

/* forma antiga
console.log(it);
while (true){
    let {value, done}= it.next();   
    if (done) {
        break;
    }
    console.log(value);
}*/
//ess código faz a mesma coisa que os códigos acima
for (let value of arr) {
    console.log(value);
}

//criando a regra para ser iterável
const obj = {
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it2 = obj[Symbol.iterator]()

for (let value of obj) {
    console.log(value);
}

const arr2 = [...obj];//antes não podiamos usar o spread, pois obj não era iteravel. Agora podemos
console.log(arr2);