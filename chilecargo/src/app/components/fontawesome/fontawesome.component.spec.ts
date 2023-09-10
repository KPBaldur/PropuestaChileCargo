import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontawesomeComponent } from './fontawesome.component';

describe('FontawesomeComponent', () => {
  let component: FontawesomeComponent;
  let fixture: ComponentFixture<FontawesomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontawesomeComponent]
    });
    fixture = TestBed.createComponent(FontawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
