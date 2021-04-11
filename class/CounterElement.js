import Counter from "./Counter.js";

class CounterElement
{
    constructor(selector){
        const el = document.querySelector(selector);

        this.title =el.dataset.title || 'Totuccio';
        this.initial=el.dataset.initial || 0;
        this.min= el.dataset.min || null;
        this.max=el.dataset.max || null;

        el.innerHTML=   `<div class="name">${this.title}</div>
                        <button class="btn-less">-</button>
                        <span class="display">${this.initial}</span>
                        <button class="btn-add">+</button>`

        this.addBtn = el.querySelector('.btn-add');
        this.lessBtn = el.querySelector('.btn-less');
        this.display = el.querySelector('.display');

        this.addBtn.addEventListener('click' , this.addBtnHandler);
        this.lessBtn.addEventListener('click' , this.lessBtnHandler);

        this.counter= new Counter(this.initial , this.min , this.max);
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