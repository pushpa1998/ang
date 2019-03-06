import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
urwish;
  constructor(private Http:HttpClient) { }
  getlist(){
    this.Http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
      console.log(data);
      this.urwish=data;
    })
  }

  ngOnInit() {
  }

}
