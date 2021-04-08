import Counter from "./Counter.js";

class CounterElement
{
    constructor(selector){
        const el = document.querySelector(selector);

        this.addBtn = el.querySelector('.btn-add');
        this.lessBtn = el.querySelector('.btn-less');
        this.display = el.querySelector('.display');

        this.addBtn.addEventListener('click' , this.addBtnHandler);
        this.lessBtn.addEventListener('click' , this.lessBtnHandler);

        this.counter= new Counter();
    }

    
    addBtnHandler = () =>
    {
        this.counter.increment();
        this.display.innerHTML=this.counter.value;
    }

    lessBtnHandler = () =>
    {
        this.counter.decrement();
        this.display.innerHTML = this.counter.value;
    }

}

export default CounterElement;