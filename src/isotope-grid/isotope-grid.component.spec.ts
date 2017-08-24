import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsotopeGridComponent } from './isotope-grid.component';

describe('IsotopeGridComponent', () => {
  let component: IsotopeGridComponent;
  let fixture: ComponentFixture<IsotopeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsotopeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsotopeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
