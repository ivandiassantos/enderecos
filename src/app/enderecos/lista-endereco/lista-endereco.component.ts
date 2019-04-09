import { Component, OnInit } from '@angular/core';
import { Endereco } from '../modelo/endereco';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrls: ['./lista-endereco.component.css']
})
export class ListaEnderecoComponent implements OnInit {
  enderecos:Endereco[] = [];
  constructor(private enderecoService:EnderecoService) { }

  ngOnInit() {
    this.enderecoService.listar().subscribe(enderecos =>{this.enderecos = enderecos});
  }

}
