import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:` <div>  
<h1 [innerHtml]='myname'> 
  </h1>
  </div> ` 
})  

export class AppComponent {

myname: string = "Sachin";  
 
}
