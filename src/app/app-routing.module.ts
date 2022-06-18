import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [{

  path:"", component: HomeComponent

},{

  path:"about", component: AboutUsComponent

},
{

  path: 'dish', component: MenuComponent},{

    path: 'dishes/dish/:x', component: DetailsComponent

},{

  path: 'order', component: OrderComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
