import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { CheckoutComponent } from './components/checkout/checkout.component'
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component"
import { ThankYouComponent } from "./components/shared/thank-you/thank-you.component"

const routes: Routes = [
  { path: "", redirectTo: "/shopping", pathMatch: "full" },
  { path: "shopping", component: ShoppingCartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "thank-you", component: ThankYouComponent },  
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
