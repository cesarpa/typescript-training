<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators'

=======
import { Injectable } from '@angular/core';
>>>>>>> 27502088fd5fc6d86b4fd5f88cd46524714b1eab

@Injectable({
  providedIn: 'root'
})
export class ProductService {

<<<<<<< HEAD
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse{
  _embedded:{
    products: Product[];
  }
=======
  constructor() { }
>>>>>>> 27502088fd5fc6d86b4fd5f88cd46524714b1eab
}
