import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraEnderecoComponent } from './cadastra-endereco.component';

describe('CadastraEnderecoComponent', () => {
  let component: CadastraEnderecoComponent;
  let fixture: ComponentFixture<CadastraEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
