const Saluto="ciao"; // le variabili const non posso essere riassegnate o ridichiarate al contrario di VAR

const colori=[];

colori.push("red");
colori.push("green");

console.log(colori);

let numeri = [1,2,3,4];

numeri ="uno due tre";

console.log(numeri);


const num = [1,2,3,4,5,6,7,8,9];

const numeriPerDueDichaiaritvi = num.map(function(numero){
    return numero*2;
})

//arrow function standard
const numeriPerDue = num.map( (numero) => { // all interno delle parentesi tonde si possono passare piu variabili 
    return numero*2;
}
)

//arrow function con un solo argomento 
const numeriPerDueUnParametro = num.map( numero => {  //si possono omettere le parentesi tonde nel passaggio di variabile
    return numero*2;
}
)


//arrow function con un solo parametro e senza parentesi graffe
const numeriPerDueNoGraffe = num.map( numero => numero*2 )  //si possono omettere le parentesi tonde nel passaggio di variabili e le graffe prima delle istruzioni 


console.log(numeriPerDueDichaiaritvi);
console.log(numeriPerDue);               // danno tutte lo stesso risultato 
console.log(numeriPerDueUnParametro);
console.log(numeriPerDueNoGraffe);




const dispari= numeriPerDueNoGraffe.filter(n => n%2 !== 0);
console.log(dispari);