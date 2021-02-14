import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapastestComponent } from './mapastest.component';

describe('MapastestComponent', () => {
  let component: MapastestComponent;
  let fixture: ComponentFixture<MapastestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapastestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
