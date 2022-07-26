import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  private readonly url = "http://localhost:3000/register"

  register(usuario: User): Observable<any> {
    return this.httpClient.post(
      this.url,
      JSON.stringify(usuario),
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
        observe: "response"
      }
    )
  }


}
