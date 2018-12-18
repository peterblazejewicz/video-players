import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleYoutubeApiComponent } from './google-youtube-api.component';

describe('GoogleYoutubeApiComponent', () => {
  let component: GoogleYoutubeApiComponent;
  let fixture: ComponentFixture<GoogleYoutubeApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleYoutubeApiComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleYoutubeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
