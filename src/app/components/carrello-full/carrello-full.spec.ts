import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelloFull } from './carrello-full';

describe('CarrelloFull', () => {
  let component: CarrelloFull;
  let fixture: ComponentFixture<CarrelloFull>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrelloFull]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrelloFull);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
