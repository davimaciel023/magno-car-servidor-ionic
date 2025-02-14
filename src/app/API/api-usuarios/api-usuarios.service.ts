import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {

  private readonly url = 'http://localhost:3000/'

  constructor(
    private http: HttpClient,
  ) { }

  getUsuarios() {
    return this.http.get(this.url)
  }

  criarUsuario(user: any): Observable<any>{
    const params = new HttpParams()
      .set('nomeDoUsuario', user.nomeDoUsuario)
      .set('email', user.email)
      .set('modeloCarro', user.modeloCarro)
      .set('senha', user.senha)

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })

    return this.http.post(`${this.url}/criar`, params.toString(), { headers })
  }
}
