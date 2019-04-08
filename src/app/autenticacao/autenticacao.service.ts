import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  autenticar(login: string, senha: string) {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic ' + btoa('desafio:desafio-client')
    });
    return this.http.post(
      'http://localhost:9092/oauth/token', { login, senha }, { headers: headers, params: { grant_type: 'password', login, senha } })
      .pipe(tap(res => {
        const token: string = res['access_token'];
        localStorage.setItem('token', token);
      }))
  }
}
