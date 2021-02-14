import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdadparqueautomotorComponent } from './edadparqueautomotor.component';

describe('EdadparqueautomotorComponent', () => {
  let component: EdadparqueautomotorComponent;
  let fixture: ComponentFixture<EdadparqueautomotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdadparqueautomotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdadparqueautomotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
