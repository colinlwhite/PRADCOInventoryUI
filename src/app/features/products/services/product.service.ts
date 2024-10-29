import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiUrl = 'https://localhost:7109/api/products';

  constructor(private http: HttpClient) {}


  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
