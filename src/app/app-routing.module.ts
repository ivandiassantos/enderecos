import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutLoginComponent } from './layout/layout-login/layout-login.component';
import { LoginComponent } from './login/login.component';
import { LayoutFuncionalidadeComponent } from './layout/layout-funcionalidade/layout-funcionalidade.component';
import { ListaEnderecoComponent } from './enderecos/lista-endereco/lista-endereco.component';
import { CadastraEnderecoComponent } from './enderecos/cadastra-endereco/cadastra-endereco.component';
import { AlteraEnderecoComponent } from './enderecos/altera-endereco/altera-endereco.component';
import { DetalhaEnderecoComponent } from './enderecos/detalha-endereco/detalha-endereco.component';
import { AuthGuard } from './autenticacao/auth.guard';

const routes: Routes = [{
  path: '',
  component: LayoutLoginComponent,
  children: [{
    path: '',
    component: LoginComponent
  }, {
    path: '',
    component: LayoutFuncionalidadeComponent,
    children: [{
      path: 'lista-enderecos',
      component: ListaEnderecoComponent,
      canActivate:[AuthGuard]
    }]
  }, {
    path: '',
    component: LayoutFuncionalidadeComponent,
    children: [{
      path: 'cadastra-endereco',
      component: CadastraEnderecoComponent,
      canActivate:[AuthGuard]
    }]
  }, {
    path: '',
    component: LayoutFuncionalidadeComponent,
    children: [{
      path: 'altera-endereco/:codEndereco',
      component: AlteraEnderecoComponent,
      canActivate:[AuthGuard]
    }]
  }, {
    path: '',
    component: LayoutFuncionalidadeComponent,
    children: [{
      path: 'detalha-endereco/:codEndereco',
      component: DetalhaEnderecoComponent,
      canActivate:[AuthGuard]
    }]
  }]
},
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
