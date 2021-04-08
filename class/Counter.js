class Counter
{

   constructor(iniziale=0 ,min , max)
   {
       this.value=iniziale;
       this.min=min;
       if(this.value>this.max)
       {
           this.value=this.max; 
       }
       this.max=max;
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