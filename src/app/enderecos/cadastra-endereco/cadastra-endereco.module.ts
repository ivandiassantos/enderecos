import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraEnderecoComponent } from './cadastra-endereco.component';
import { MascaraModule } from 'src/app/diretivas/mascara/mascara.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastraEnderecoComponent],
  imports: [
    CommonModule,
    MascaraModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastraEnderecoModule { }
