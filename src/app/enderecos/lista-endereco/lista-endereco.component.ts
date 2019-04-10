import { Component, OnInit } from '@angular/core';
import { Endereco } from '../modelo/endereco';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrls: ['./lista-endereco.component.css']
})
export class ListaEnderecoComponent implements OnInit {
  enderecos: Endereco[] = [];
  exibeMensagemSucesso:boolean = false;
  exibeMensagemErro:boolean = false;
  mensagem:string = '';
  constructor(private enderecoService: EnderecoService) { }

  ngOnInit() {
    this.enderecoService.listar().subscribe(enderecos => { this.enderecos = enderecos });
  }

  excluirEndereco(endereco: Endereco) {
    this.enderecoService.excluir(endereco.codEndereco).subscribe(
      resposta => {
        this.exibeMensagemSucesso = true;
        this.mensagem = 'Endereço excluído com sucesso.';
        this.ngOnInit();
      },
      erro => {
        this.exibeMensagemErro = true;
        this.mensagem = 'Erro ao alterar o endereço.';
      }
    );
  }

}
