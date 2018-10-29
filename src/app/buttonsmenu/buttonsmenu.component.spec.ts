import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsmenuComponent } from './buttonsmenu.component';

describe('ButtonsmenuComponent', () => {
  let component: ButtonsmenuComponent;
  let fixture: ComponentFixture<ButtonsmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
