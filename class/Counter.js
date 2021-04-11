class Counter
{

   constructor(iniziale=0 , min = null  , max = null  )
   {

       this.value= parseInt(iniziale);
       this.max=max;
       if(this.value>this.max)
       {
           this.value=this.max; 
       }
       this.min=min;
       if (this.value<this.min)
       {   
          this.value=this.min;
       }
     
       
   } 


   increment()
   {
          if (this.max === null)
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
     if (this.min === null)
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