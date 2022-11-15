import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Routes = [
  {path: 'addproduct', component: AddProductComponent},
  {path: 'homepage'  , component: HomePageComponent},
  {path: 'test' , component: TestComponentComponent},
  {path: '', redirectTo: '/test', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }