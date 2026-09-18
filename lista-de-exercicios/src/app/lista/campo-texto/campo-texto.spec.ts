import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoTexto } from './campo-texto';

describe('CampoTexto', () => {
  let component: CampoTexto;
  let fixture: ComponentFixture<CampoTexto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampoTexto],
    }).compileComponents();

    fixture = TestBed.createComponent(CampoTexto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
