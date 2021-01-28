//criando a regra para ser iterável, o símbolo é '*'
const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i]; //pausa a função, mandando esse valor para fora e depois volta
        }
    }
};
/*
function* hello(){
    console.log('Hello');
    yield 1;

    console.log('Form');
    const value = yield 2;

    console.log(value);
}

const it3 = hello();

console.log(it3.next());
console.log(it3.next());
console.log(it3.next('Outside'));
*/

for (let value of obj) {
    console.log(value);
}