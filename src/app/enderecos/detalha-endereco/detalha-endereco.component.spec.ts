import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaEnderecoComponent } from './detalha-endereco.component';

describe('DetalhaEnderecoComponent', () => {
  let component: DetalhaEnderecoComponent;
  let fixture: ComponentFixture<DetalhaEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhaEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhaEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
