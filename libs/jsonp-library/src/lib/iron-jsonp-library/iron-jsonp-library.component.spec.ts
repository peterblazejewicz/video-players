import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronJsonpLibraryComponent } from './iron-jsonp-library.component';

describe('IronJsonpLibraryComponent', () => {
  let component: IronJsonpLibraryComponent;
  let fixture: ComponentFixture<IronJsonpLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IronJsonpLibraryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronJsonpLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
