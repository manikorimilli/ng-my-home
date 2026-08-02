import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesList } from './homes-list';

describe('HomesList', () => {
  let component: HomesList;
  let fixture: ComponentFixture<HomesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomesList],
    }).compileComponents();

    fixture = TestBed.createComponent(HomesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
