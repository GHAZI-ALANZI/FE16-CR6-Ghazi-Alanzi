import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { IDish } from '../InterfaceDish';
import { Dish } from '../DishInfo';
import { MycartService } from '../mycart.service';
import { OrderComponent } from '../order/order.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dish: IDish = {} as IDish;
  id:number = 0;


  constructor(private route: ActivatedRoute,private mycartService: MycartService) { }
  addToCart() {
    window.alert('Your product has been added to the cart!');
    this.mycartService.addToCart(this.dish);
  }
  
  countClickt(){this.mycartService.countClick();}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
     this.id = +params['x'];
     this.dish = Dish[this.id];
   });
 
  }
 }
