import { async, TestBed } from '@angular/core/testing';
import { GoogleApisModule } from './google-apis.module';

describe('GoogleApisModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GoogleApisModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GoogleApisModule).toBeDefined();
  });
});
