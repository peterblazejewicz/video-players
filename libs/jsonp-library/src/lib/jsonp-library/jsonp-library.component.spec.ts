import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpLibraryComponent } from './jsonp-library.component';

describe('JsonpLibraryComponent', () => {
  let component: JsonpLibraryComponent;
  let fixture: ComponentFixture<JsonpLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JsonpLibraryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
