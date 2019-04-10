import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UfService } from 'src/app/uf/service/uf.service';
import { Endereco } from '../modelo/endereco';
import { EnderecoService } from '../service/endereco.service';
import { UF } from 'src/app/uf/modelo/uf';

@Component({
  selector: 'app-altera-endereco',
  templateUrl: './altera-endereco.component.html',
  styleUrls: ['./altera-endereco.component.css']
})
export class AlteraEnderecoComponent implements OnInit {
  listaUfs: UF[] = [];
  endereco: Observable<Endereco>;
  codEndereco: number;
  alteracaoEnderecoFormGroup: FormGroup;
  exibeMensagemSucesso:boolean = false;
  exibeMensagemErro:boolean = false;
  mensagem:string = '';

  constructor(private route: ActivatedRoute,
    private enderecoService: EnderecoService,
    private formBuilder: FormBuilder,
    private ufService: UfService) { }

  ngOnInit() {
    this.alteracaoEnderecoFormGroup = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.maxLength(10)]],
      bairro: ['', [Validators.required, Validators.maxLength(100)]],
      cidade: ['', [Validators.required, Validators.maxLength(100)]],
      uf: ['', [Validators.required]],
      logradouro: ['', [Validators.required, Validators.maxLength(100)]],
      complemento: ['', [Validators.maxLength(100)]],
    });
    this.ufService.listarUfs().subscribe(listaUfs => { this.listaUfs = listaUfs });

    this.obterDadosAlteracao();
  }

  obterDadosAlteracao() {
    this.endereco = this.enderecoService.obterPor(this.route.snapshot.params.codEndereco)
      .pipe(tap(endereco => {
        this.codEndereco = endereco.codEndereco;
        this.alteracaoEnderecoFormGroup.get('cep').setValue(endereco.cep);
        this.alteracaoEnderecoFormGroup.get('bairro').setValue(endereco.bairro);
        this.alteracaoEnderecoFormGroup.get('cidade').setValue(endereco.cidade);
        this.alteracaoEnderecoFormGroup.get('uf').setValue(endereco.uf);
        this.alteracaoEnderecoFormGroup.get('logradouro').setValue(endereco.logradouro);
        this.alteracaoEnderecoFormGroup.get('complemento').setValue(endereco.complemento);

      }));
  }

  alterar() {
    let endereco: Endereco = this.alteracaoEnderecoFormGroup.getRawValue();
    endereco.codEndereco = this.codEndereco;
    this.enderecoService.alterar(endereco).subscribe(
      resposta => {
        this.exibeMensagemSucesso = true;
        this.mensagem = 'Endereço alterado com sucesso.';
      },
      erro => {
        this.exibeMensagemErro = true;
        this.mensagem = 'Erro ao alterar o endereço.';
      }
    );
  }

}
