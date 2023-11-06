import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageinicialPage } from './pageinicial.page';

describe('PageinicialPage', () => {
  let component: PageinicialPage;
  let fixture: ComponentFixture<PageinicialPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageinicialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
