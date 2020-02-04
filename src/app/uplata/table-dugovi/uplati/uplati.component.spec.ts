import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplatiComponent } from './uplati.component';

describe('UplatiComponent', () => {
  let component: UplatiComponent;
  let fixture: ComponentFixture<UplatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
