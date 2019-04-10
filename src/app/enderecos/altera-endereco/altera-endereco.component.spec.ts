import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraEnderecoComponent } from './altera-endereco.component';

describe('AlteraEnderecoComponent', () => {
  let component: AlteraEnderecoComponent;
  let fixture: ComponentFixture<AlteraEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
