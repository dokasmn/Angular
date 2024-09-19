import { HttpClient, HttpResponse } from '@angular/common/http'; // Import HttpResponse
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginResponse } from '../../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _http = inject(HttpClient);

  con = 'https://dummyjson.com/auth/login';

  login(username: string, password: string): Observable<HttpResponse<LoginResponse>> {
    return this._http.post<any>(this.con, {
      username: username,
      password: password
    }, { observe: 'response' })
    .pipe(
      map((res: HttpResponse<any>) => {
        return res.clone({
          body: {
            email: res.body.email,
            firstName: res.body.firstName,
            lastName: res.body.lastName,
            image: res.body.image
          }
        });
      })
    );
  }
}
