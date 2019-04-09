import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  deveMostrarMensagemErro:boolean = false;
  mensagemErro:string = '';
  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService,
    private router: Router) {

  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required, Validators.maxLength(20)]],
      senha: ['', [Validators.required, Validators.maxLength(20)]]
    })
  }

  autenticar() {

    this.autenticacaoService.autenticar
      (this.formLogin.get('login').value, this.formLogin.get('senha').value)
      .subscribe(
        () => this.router.navigate(['/lista-enderecos']),
        erro => {
          this.deveMostrarMensagemErro = true;
          this.mensagemErro = 'Login e/ou senha inválido(s)';
          this.formLogin.reset();
        }
      );

  }

}
