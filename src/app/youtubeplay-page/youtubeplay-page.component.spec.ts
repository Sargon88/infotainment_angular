import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeplayPageComponent } from './youtubeplay-page.component';

describe('YoutubeplayPageComponent', () => {
  let component: YoutubeplayPageComponent;
  let fixture: ComponentFixture<YoutubeplayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeplayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
