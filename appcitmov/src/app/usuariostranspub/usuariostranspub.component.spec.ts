import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariostranspubComponent } from './usuariostranspub.component';

describe('UsuariostranspubComponent', () => {
  let component: UsuariostranspubComponent;
  let fixture: ComponentFixture<UsuariostranspubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariostranspubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariostranspubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
