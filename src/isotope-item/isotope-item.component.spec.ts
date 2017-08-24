import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsotopeItemComponent } from './isotope-item.component';

describe('IsotopeItemComponent', () => {
  let component: IsotopeItemComponent;
  let fixture: ComponentFixture<IsotopeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsotopeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsotopeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
