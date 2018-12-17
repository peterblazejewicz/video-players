import { async, TestBed } from '@angular/core/testing';
import { JsonpLibraryModule } from './jsonp-library.module';

describe('JsonpLibraryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JsonpLibraryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(JsonpLibraryModule).toBeDefined();
  });
});
