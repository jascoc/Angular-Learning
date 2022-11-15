import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddProductComponent } from './add-product/add-product.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogService } from './dog.service';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { TestComponentComponent } from './test-component/test-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    HomePageComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }