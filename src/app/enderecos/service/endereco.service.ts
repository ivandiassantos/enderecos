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
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.post('http://localhost:9093/v1/endereco', endereco, {headers:headers});
  }

  obterPor(codEndereco:number){
    return this.http.get<Endereco>('http://localhost:9093/v1/endereco/'+codEndereco);
  }

  alterar(endereco:Endereco){
    return this.http.put('http://localhost:9093/v1/endereco', endereco);
  }

  excluir(codEndereco:number){
    return this.http.delete('http://localhost:9093/v1/endereco/'+codEndereco);
  }
}
