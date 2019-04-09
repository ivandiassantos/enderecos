import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEnderecoComponent } from './lista-endereco.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListaEnderecoComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ListaEnderecoModule { }
