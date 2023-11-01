import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantestipoPage } from './restaurantestipo.page';

describe('RestaurantestipoPage', () => {
  let component: RestaurantestipoPage;
  let fixture: ComponentFixture<RestaurantestipoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantestipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
