import { Injectable } from '@angular/core';
import { IDish } from './InterfaceDish';



@Injectable({
  providedIn: 'root'
})
export class MycartService {
  meal: IDish[] = [];
  dish: IDish = {} as IDish;
  Counter :number = 0;
  
  constructor() { }

  addToCart(product: IDish) {
    this.meal.push(product);
  }
  
  getItems() {
    return this.meal;
  }
  countClick(){

this.Counter++;
  }
  count(){
    let c=(document.getElementById("price")as any).innerHTML=this.Counter;
  }
  

}
