import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  title: string = 'Top 3 Bollywood movies';

  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar Hirani', cast: 'Amir khan', releaseDate: '2009'},
    { title: 'Lagaan', director: 'Ashutosh', cast: 'Amir khan', releaseDate: '2002'},
    { title: 'Tanhaji : The unsung Warrior', director: 'Om raut', cast: 'Ajay Devgan', releaseDate: '2020'}

  ]
  constructor() { }

  ngOnInit() {
  }

}
class Movie {
  title:string;
  director:string;
  cast:string;
  releaseDate:string;
}
