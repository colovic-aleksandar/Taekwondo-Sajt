import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviClanakComponent } from './novi-clanak.component';

describe('NoviClanakComponent', () => {
  let component: NoviClanakComponent;
  let fixture: ComponentFixture<NoviClanakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoviClanakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviClanakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
