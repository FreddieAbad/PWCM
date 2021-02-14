import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajestransbordoComponent } from './viajestransbordo.component';

describe('ViajestransbordoComponent', () => {
  let component: ViajestransbordoComponent;
  let fixture: ComponentFixture<ViajestransbordoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajestransbordoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajestransbordoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
