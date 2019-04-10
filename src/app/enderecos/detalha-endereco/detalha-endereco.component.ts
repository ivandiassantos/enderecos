import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../modelo/endereco';
import { EnderecoService } from '../service/endereco.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalha-endereco',
  templateUrl: './detalha-endereco.component.html',
  styleUrls: ['./detalha-endereco.component.css']
})
export class DetalhaEnderecoComponent implements OnInit {

  endereco: Endereco;
  
  constructor(private enderecoService:EnderecoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.enderecoService.obterPor(this.route.snapshot.params.codEndereco)
    .subscribe(endereco=>{
      this.endereco = endereco;
    });
  }

}
