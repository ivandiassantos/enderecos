import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutLoginModule } from './layout/layout-login/layout-login.module';
import { LoginModule } from './login/login.module';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { LayoutFuncionalidadeModule } from './layout/layout-funcionalidade/layout-funcionalidade.module';
import { ListaEnderecoModule } from './enderecos/lista-endereco/lista-endereco.module';
import { CadastraEnderecoModule } from './enderecos/cadastra-endereco/cadastra-endereco.module';
import { AlteraEnderecoModule } from './enderecos/altera-endereco/altera-endereco.module';
import { DetalhaEnderecoModule } from './enderecos/detalha-endereco/detalha-endereco.module';
import { ErrorInterceptor } from './interceptor/error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutLoginModule,
    LayoutFuncionalidadeModule,
    ListaEnderecoModule,
    CadastraEnderecoModule,
    AlteraEnderecoModule,
    DetalhaEnderecoModule,
    LoginModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
