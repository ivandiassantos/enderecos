import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-funcionalidade',
  templateUrl: './layout-funcionalidade.component.html',
  styleUrls: ['./layout-funcionalidade.component.css']
})
export class LayoutFuncionalidadeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  sair(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
