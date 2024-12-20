import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineComponent } from './nine.component';

describe('NineComponent', () => {
  let component: NineComponent;
  let fixture: ComponentFixture<NineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NineComponent]
    });
    fixture = TestBed.createComponent(NineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
