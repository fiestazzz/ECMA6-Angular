class Counter
{

   constructor(iniziale , min  , max  )
   {

     this.value= parseInt(iniziale) || 0;
     this.max=parseInt(max) || null;
     this.min=parseInt(min) || null;

     if(this.max != null && this.value>this.max)
     {
          this.value=this.max;
          throw new Error('initial è maggiore di max');
     }  
     if (this.min != null && this.value<this.min)
     {   
          this.value=this.min;
          throw  new Error('initial è minore di min');
     }
      
   } 


   increment()
   {
          if (this.max == null)
          {
               this.value++;  
           }
          else if(this.value<this.max)
          {    
               this.value++;
          }
   }

   decrement()
   {
     if (this.min == null)
     {
          this.value--;
     }
     else  if(this.value>this.min)
     {
          this.value--;
     }      
   }
}

export default Counter;