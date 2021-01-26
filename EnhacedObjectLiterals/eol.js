var prop1 = 'alguma coisa'
function method1(){
    console.log('método chamado');
}

var propName = "teste";

//criando um objeto
var obj = {
    //é possível adicionar propriedades (atributos) ao objeto, abaixo segue um exemplo
    [propName + 'concat']: 'valor da prop',
    
    //prop1: 'alguma coisa' jeito mais simples
    //prop1: prop1          usando a vairável de fora
    prop1,                 //usnado as propriedades do ES6
    method1,
    
    /*sum: function sum(a, b){
        return a + b;
    }*/
    sum(a, b){ //forma alternativa de escrever a forma acima
        return a +b;
    }
    
};

console.log(obj.prop1);
console.log(obj.sum(5, 10));
obj.method1();
console.log(obj);