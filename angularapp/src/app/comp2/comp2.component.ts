import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  name:string="vitthal kale"
  description:string="property binding example"
  url='https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/Copy-of-Copy-of-Travel-Photography.png';
  lastname:string="surya"
  constructor() { }

  ngOnInit() {
  }
  show() {
   alert("Hey!! this is working")
    
  }
}
