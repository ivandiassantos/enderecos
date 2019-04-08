import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutLoginModule } from './layout/layout-login/layout-login.module';
import { LoginModule } from './login/login.module';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { LayoutFuncionalidadeComponent } from './layout/layout-funcionalidade/layout-funcionalidade.component';
import { ListaEnderecoComponent } from './enderecos/lista-endereco/lista-endereco.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutFuncionalidadeComponent,
    ListaEnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutLoginModule,
    LoginModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
