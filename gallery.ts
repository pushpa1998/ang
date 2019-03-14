import { Component, OnInit } from '@angular/core';
import { GetService } from '../get.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[GetService]
})
export class GalleryComponent implements OnInit {

  stddetails={
  sn:'',
  si:'',
  sa:'',
  }
  studentname;
  studentid;
  studentadd;
        
  
  constructor(private hai:GetService) { }

  ngOnInit() {
  }
postlist(){
  this.stddetails.sn=this.studentname;
  this.stddetails.si=this.studentid;
  this.stddetails.sa=this.studentadd;
  this.hai.postlist(this.stddetails).subscribe((data)=>{
   console.log(data);
 }
 )
}
}
