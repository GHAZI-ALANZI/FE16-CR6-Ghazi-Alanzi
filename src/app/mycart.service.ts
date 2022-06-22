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
  count():any{
    let c=this.Counter;
    if(c>0){return c}
  }
  
 totalPrice() {

  let total = 0;

  for (let val of this.meal) {

    total += val.price ;
if(total<40){let v = total-total*0.1 ;
(document.getElementById("total")as any).innerHTML = v + " €"+ " you have get 10% of the total amount" ;
  }else{
    let y = total-total*0.15 ;
    
    (document.getElementById("total")as any).innerHTML = y + " €"+"   "+"price befor discount is:"+(y+total*0.15)+" €"+"   "+" you have get 15% of the total amount" ;
  }


}

}}