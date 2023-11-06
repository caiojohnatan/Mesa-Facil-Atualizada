import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EDITARPage } from './editar.page';

describe('EDITARPage', () => {
  let component: EDITARPage;
  let fixture: ComponentFixture<EDITARPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EDITARPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
