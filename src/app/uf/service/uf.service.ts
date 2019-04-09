import { Injectable } from '@angular/core';
import { UF } from '../modelo/uf';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  constructor(private http:HttpClient) { }

  listarUfs(){
    return this.http.get<UF[]>('http://localhost:9093/v1/uf/');
  }
}
