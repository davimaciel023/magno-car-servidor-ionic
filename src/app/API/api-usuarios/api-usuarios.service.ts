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

  criarUsuario(user: any): Observable<any>{
    const params = new HttpParams()
      .set('nomeDoUsuario', user.nomeDoUsuario)
      .set('email', user.email)
      .set('modeloCarro', user.modeloCarro)
      .set('senha', user.senha)

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })

    return this.http.post(`${this.url}/cadastroDeUsuario`, params.toString(), { headers })
  }

  login(email: string, senha: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('senha', senha);

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.url, params.toString(), { headers });
  }
  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.url}/usuarios/${id}`);
  }
}
