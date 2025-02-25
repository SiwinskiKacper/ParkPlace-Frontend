import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayParkSpotsComponent } from './display-park-spots.component';

describe('DisplayParkSpotsComponent', () => {
  let component: DisplayParkSpotsComponent;
  let fixture: ComponentFixture<DisplayParkSpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayParkSpotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayParkSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
