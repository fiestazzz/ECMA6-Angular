import Counter from './Counter.js';
import CounterElement from './CounterElement.js';

/*const contatore = new Counter();

contatore.increment();*/


//const counterElement = new CounterElement('.counter');


let contatore = new Counter()
//console.log(contatore.value)
contatore.increment()
contatore.increment()


console.log(contatore.value == 2);



contatore = new Counter(10)
contatore.increment()
contatore.increment()


console.log(contatore.value == 12);



contatore = new Counter(10, 10 ,15)

contatore.increment() //11
contatore.increment() // 12
contatore.increment() // 13

console.log(contatore.value == 13)


contatore.increment() // 14
contatore.increment() // 15
contatore.increment() // 15
contatore.increment() // 15

console.log(contatore.value == 15)




contatore= new Counter(10 , 10 , 15);

contatore.decrement()
contatore.decrement()
contatore.decrement()
contatore.decrement()

console.log(contatore.value == 10)



contatore= new Counter(12 , 10 , 15);

contatore.decrement()
contatore.decrement()
