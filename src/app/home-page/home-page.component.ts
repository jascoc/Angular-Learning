import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public products: Dog[] | undefined;
  
  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this.dogService.getProduct().subscribe(
      (response: Dog[]) => {
        response.forEach(element => {
          element.image = 'data:image/png;base64,' + element.image;
        });
        this.products = response;
        //this.products[0].image = 'data:image/png;base64,' + this.products[0].image;*/
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public deleteProduct(id: number): void {
    this.dogService.deleteProduct(id).subscribe(
      (response: void) => {
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    console.log(id);
  }

}
