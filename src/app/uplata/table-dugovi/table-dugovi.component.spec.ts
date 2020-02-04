import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDugoviComponent } from './table-dugovi.component';

describe('TableDugoviComponent', () => {
  let component: TableDugoviComponent;
  let fixture: ComponentFixture<TableDugoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDugoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDugoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
