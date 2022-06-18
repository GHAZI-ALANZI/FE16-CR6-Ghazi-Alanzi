import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 

import { IDish } from '../InterfaceDish';
import { Dish } from '../DishInfo';
import { MycartService } from '../mycart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes:IDish[] = Dish;
  

  constructor() { }

  ngOnInit(): void {
  }

}
