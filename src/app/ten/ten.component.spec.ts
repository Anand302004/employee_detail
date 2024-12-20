import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenComponent } from './ten.component';

describe('TenComponent', () => {
  let component: TenComponent;
  let fixture: ComponentFixture<TenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenComponent]
    });
    fixture = TestBed.createComponent(TenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
