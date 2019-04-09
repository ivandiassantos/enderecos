import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Endereco } from '../modelo/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Endereco[]>('http://localhost:9093/v1/endereco');
  }  

  cadastrar(endereco:Endereco){
    console.log('Endereço: ', JSON.stringify(endereco));
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8'
    });
    return this.http.post('http://localhost:9093/v1/endereco', JSON.stringify(endereco), {headers});
  }
}
