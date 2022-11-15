import { Component, OnInit } from '@angular/core';
import { DogImage } from '../dogImage';
import { DogService } from '../dog.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Dog } from '../dog';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  
  public dogImage!: DogImage;
  public image = new String(); 
  constructor(private dogService: DogService, private router: Router) { }

  ngOnInit(): void {
    this.getDogImage();
  }

  public getDogImage(): void {
    this.dogService.getDogImage().subscribe(
      (response: DogImage) => {
        this.dogImage = response;
        this.image = response.message;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddProduct(addForm: NgForm): void {
    addForm.value.image=this.dogImage.message;
    console.log('i am sending: ' + JSON.stringify(addForm.value))
    this.dogService.addProduct(addForm.value).subscribe(
      (res: Dog) => {
        console.log(JSON.stringify(res));
        this.router.navigateByUrl('/homepage');
      },
      (err: HttpErrorResponse) => {
        alert(err.message);
      }
    );
  }

}