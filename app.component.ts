import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:` <div>  
  <h1>{{firstname}}</h1>  
   <h1>{{lastname}}</h1>  
  </div> ` 
})  

export class AppComponent {

firstname: string = "Sachin";  
lastname:string = "Tendulkar" 
}
