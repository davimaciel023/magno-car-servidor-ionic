import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {
  private http!: HttpClient;

  private readonly apiUsuarios = 'http://localhost:8000';

  constructor(private injector: Injector) {}

  private getHttp(): HttpClient {
    if (!this.http) {
      this.http = this.injector.get(HttpClient);
    }
    return this.http;
  }

  cadastroDeUsuario(user: any): Observable<any> {
    const params = new URLSearchParams();
    params.set('nomeDoUsuario', user.nomeDoUsuario);
    params.set('email', user.email);
    params.set('modeloCarro', user.modeloCarro);
    params.set('senha', user.senha);

    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    return this.getHttp().post(`${this.apiUsuarios}/cadastroDeUsuario`, params.toString(), { headers });
  }

  login(email: any, senha: any) {
    const params = new URLSearchParams();
    params.set('email', email);
    params.set('senha', senha);

    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    return this.getHttp().post(`${this.apiUsuarios}/login`, params.toString(), { headers });
  }
}
