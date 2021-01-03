import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualityItemComponent } from './actuality-item.component';

describe('ActualityItemComponent', () => {
  let component: ActualityItemComponent;
  let fixture: ComponentFixture<ActualityItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualityItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
