import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NEXT } from '@angular/core/src/render3/interfaces/view';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mydata;

  constructor(private Http:HttpClient) { }
  getlist(){
    this.Http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>{
    console.log(data);
    this.mydata=data;
    })
  }

  ngOnInit() {
  }

}
