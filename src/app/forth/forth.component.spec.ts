import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthComponent } from './forth.component';

describe('ForthComponent', () => {
  let component: ForthComponent;
  let fixture: ComponentFixture<ForthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForthComponent]
    });
    fixture = TestBed.createComponent(ForthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
