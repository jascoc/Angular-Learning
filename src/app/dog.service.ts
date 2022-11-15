import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from './dog';
import { DogImage } from './dogImage';
import { environment } from 'src/environments/environment';

//i reach the back end through service
@Injectable({
  providedIn: 'root'
})

export class DogService {
  private url = environment.url;
  private dogUrl = "https://dog.ceo/api/breeds/image/random";

  constructor(private http: HttpClient) {}

  public getProduct(): Observable<Dog[]> {
    return this.http.get<Dog[]>(`${this.url}/dogmanager`);
  }

  public addProduct(product: Dog): Observable<Dog> {
    return this.http.post<Dog>(`${this.url}/dogmanager/add`, product);
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/dogmanager/delete/${id}`);
  }

  public getDogImage(): Observable<DogImage> {
    return this.http.get<DogImage>(`${this.dogUrl}`);
  }
  
}