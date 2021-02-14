import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelaccesibilidadtranspubComponent } from './nivelaccesibilidadtranspub.component';

describe('NivelaccesibilidadtranspubComponent', () => {
  let component: NivelaccesibilidadtranspubComponent;
  let fixture: ComponentFixture<NivelaccesibilidadtranspubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelaccesibilidadtranspubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelaccesibilidadtranspubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
