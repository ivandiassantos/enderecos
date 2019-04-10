import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlteraEnderecoComponent } from './altera-endereco.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlteraEnderecoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AlteraEnderecoModule { }
