import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//  import route components here.  EXAMPLE:
//  import { AlphaComponent } from './alpha/alpha.component';
 import { ProductsComponent } from './products/products.component';
 import { NewComponent } from './new/new.component';
 import { ShowComponent } from './show/show.component';
 import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: NewComponent },
  { path: 'products/:idNum', component: ShowComponent },
  { path: 'products/:idNum/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
