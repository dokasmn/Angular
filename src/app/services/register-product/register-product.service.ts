import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductResponse } from '../../interfaces/product-response';

@Injectable({
  providedIn: 'root'
})
export class RegisterProductService {
  _http = inject(HttpClient)

  con = 'https://dummyjson.com/products/add';

  registerProduct(title: string, description: string, price: string): Observable<HttpResponse<ProductResponse>> {
    return this._http.post<any>(this.con, {
      title: title,
      description: description,
      price: price
    }, { observe: 'response' })
    .pipe(
      map((res: HttpResponse<any>) => {
        return res.clone({
          body: {
            title: res.body.title,
            description: res.body.description,
            price: res.body.price,
          }
        });
      })
    );
  }
}
