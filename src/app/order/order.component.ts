import { Component, OnInit } from '@angular/core';
import { MycartService } from '../mycart.service';
import { IDish } from '../InterfaceDish';
import { FormBuilder } from '@angular/forms';
import { Dish } from '../DishInfo';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  meal: IDish[] = [];
  dish: IDish = {} as IDish;
  // clickCounter :number = 0;
  // countClick(){ this.clickCounter ++;
  // }



  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });
  constructor( private mycartService: MycartService,private fb: FormBuilder) { }
  
counter(){ return this.mycartService.count()
}

   
  
  ngOnInit(): void {   this.meal = this.mycartService.getItems();

  }

}
