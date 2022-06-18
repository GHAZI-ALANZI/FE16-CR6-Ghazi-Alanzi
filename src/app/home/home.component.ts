import { Component, OnInit } from '@angular/core';
import { IDish } from '../InterfaceDish';
import { Dish } from '../DishInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dishes:IDish[] = Dish;

  constructor() { }
  scroll() {
    window.scrollTo(0,1000)
}
  ngOnInit(): void {
  }

}

