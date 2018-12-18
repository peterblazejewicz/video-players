import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpLibraryComponent } from './jsonp-library.component';

describe('JsonpLibraryComponent', () => {
  describe('Basic properties', () => {
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
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have libraryUrl property with undefined default value', () => {
      expect(component.libraryUrl).toBeUndefined();
    });

    it('shuld have callbackName property with undefined default value', () => {
      expect(component.callbackName).toBeUndefined();
    });

    it('shuld have notifyEventName property with undefined default value', () => {
      expect(component.notifyEventName).toBeUndefined();
    });

    it('shuld have notifyEvent property with default value', () => {
      expect(component.notifyEvent).toBeDefined();
    });
  });
});
