//Função anônima, ela está dentro de uma variável
var sumOld = function(a, b) {
    return a + b;
}

//objetos implicitos
var obj = {
    test:'123',
    metodo: function metodo(){
        console.log("método");
    }
}

//função contrutora de objetos
function Car(){
    this.foo = 'bar'
}

//arrow function
// usar "=>" para fazer um arroq function. parece expressão lambda do java
//reduz a escrita, nã oprecisa dizer que é uma "function"
var sum = (a, b) => a + b;
/*
var sum = a => a +5;
com apenas um argumento é possível omitir os parênteses
*/

//declaração implícita
var createObj = () => ({teste: 123});

console.log(sum(5 , 15));
console.log(createObj());
console.log(new Car());
obj.metodo();