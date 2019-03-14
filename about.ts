import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { GetService} from '../get.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[GetService]
})
export class AboutComponent implements OnInit {
mydata;
  constructor(private j:HttpClient,private ss:GetService) { }
  getlist(){
    this.ss.getlist().subscribe((data)=>{
      console.log(data);
      this.mydata=data;
    })
  }
  ngOnInit() {

  }

}
