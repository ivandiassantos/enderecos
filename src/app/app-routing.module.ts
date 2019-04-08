import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutLoginComponent } from './layout/layout-login/layout-login.component';
import { LoginComponent } from './login/login.component';
import { LayoutFuncionalidadeComponent } from './layout/layout-funcionalidade/layout-funcionalidade.component';
import { ListaEnderecoComponent } from './enderecos/lista-endereco/lista-endereco.component';

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
      component: ListaEnderecoComponent
    }]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
