import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO } from '../models/product.model';
import { catchError, retry, throwError} from 'rxjs';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}/api/products`;

  constructor(private http: HttpClient) { }

  getAllProducts(limit?: number, offset?:number) {

    let params = new HttpParams();
    if(limit !== undefined && offset !== undefined){

      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(this.apiUrl, {params})
    .pipe(
      retry(3)
    );
  }



  getProduct(id: string){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse )=> {
        if (error.status === HttpStatusCode.Conflict){
          return throwError('Server error');
        }
        if(error.status === HttpStatusCode.NotFound){
          return throwError('Not found');
        }
        if(error.status === HttpStatusCode.Unauthorized){
          return throwError('Unauthorized');
        }
        return throwError('Ups something went wrong');
      })
    );
  }

  create(dto: CreateProductDTO){
    return this.http.post<Product>(this.apiUrl, dto);
  }

  update(id: string, dto: UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`,dto);
  }

  delete(id: string){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
