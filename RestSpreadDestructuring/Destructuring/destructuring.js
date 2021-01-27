//Destructuring assigment
//importante ressaltar que não afeta as coisa originais

var arr = ['apple', 'banana', 'orange'];
// parece um array, mas não é. Mostramos como queremos quebrar o vetor e criamos variáveis de acordo
var [apple,banana, orange, [tomate, melao]] = ['apple', 
    'banana', 
    'orange', 
    ['tomate', 'melao']];

console.log(tomate, melao);

//também fuciona com objetos

var obj = {
    name: 'celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};
//a desconstruir um objeto el procura pelas propriedades com os nomes entre chaves, podemos mudar o nome com ":"
var [{name: nome2}] = obj;
var [{props: {age: idade}}] = obj; //desconstroi o objeto (props) dentro do objeto obj
var [{props: {
        favoriteColors: [cor1, cor2]
    }
}] = obj;

console.log(nome2);
console.log(idade);
console.log(cor1);