import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './mascara.directive';

@NgModule({
  declarations: [MascaraDirective],
  imports: [
    CommonModule
  ],
  exports:[
    MascaraDirective
  ]
})
export class MascaraModule { }
