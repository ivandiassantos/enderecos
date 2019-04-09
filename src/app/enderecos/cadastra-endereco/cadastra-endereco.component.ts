import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UfService } from 'src/app/uf/service/uf.service';
import { UF } from '../../uf/modelo/uf';
import { CepService } from 'src/app/cep/cep.service';
import { Endereco } from '../modelo/endereco';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-cadastra-endereco',
  templateUrl: './cadastra-endereco.component.html',
  styleUrls: ['./cadastra-endereco.component.css']
})
export class CadastraEnderecoComponent implements OnInit {
  listaUfs: UF[] = [];
  formCadastroEndereco: FormGroup;
  exibeMensagemSucesso:boolean = false;
  exibeMensagemErro:boolean = false;
  mensagem:string = '';

  constructor(private ufService: UfService,
    private formBuilder: FormBuilder,
    private cepService: CepService,
    private enderecoService:EnderecoService) { }

  ngOnInit() {
    this.ufService.listarUfs().subscribe(listaUfs => { this.listaUfs = listaUfs });
    this.formCadastroEndereco = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.maxLength(10)]],
      bairro: ['', [Validators.required, Validators.maxLength(100)]],
      cidade: ['', [Validators.required, Validators.maxLength(100)]],
      uf: ['', [Validators.required]],
      logradouro: ['', [Validators.required, Validators.maxLength(100)]],
      complemento: ['', [Validators.maxLength(100)]],
    })
  }

  cadastrar() {
    let endereco:Endereco = this.formCadastroEndereco.getRawValue();
    this.enderecoService.cadastrar(endereco).subscribe(
      resposta=>{
        this.exibeMensagemSucesso = true;
        this.mensagem = 'Endereço cadastrado com sucesso.';
        this.formCadastroEndereco.reset();
      },
      erro =>{
        this.exibeMensagemErro = true;
        this.mensagem = 'Erro ao cadastrar o endereço.';
      }
    );
  }

  consultaCEP(cep: string) {
    console.log('CEP Consulta: ');
    this.cepService.consultar(cep.replace(/[^0-9]/g, '')).subscribe(
      resposta => {
        console.log(resposta);
        this.formCadastroEndereco.get('bairro').setValue(resposta['bairro']);
        this.formCadastroEndereco.get('cidade').setValue(resposta['localidade']);
        this.formCadastroEndereco.get('uf').setValue(resposta['uf']);
        this.formCadastroEndereco.get('logradouro').setValue(resposta['logradouro']);
        this.formCadastroEndereco.get('complemento').setValue(resposta['complemento']);
      }
    );
  }

}
