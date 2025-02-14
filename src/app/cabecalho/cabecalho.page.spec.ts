import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CabecalhoPage } from './cabecalho.page';

describe('CabecalhoPage', () => {
  let component: CabecalhoPage;
  let fixture: ComponentFixture<CabecalhoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
