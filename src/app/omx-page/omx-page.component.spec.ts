import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmxPageComponent } from './omx-page.component';

describe('OmxPageComponent', () => {
  let component: OmxPageComponent;
  let fixture: ComponentFixture<OmxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
