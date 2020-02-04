import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIzmenaComponent } from './table-izmena.component';

describe('TableIzmenaComponent', () => {
  let component: TableIzmenaComponent;
  let fixture: ComponentFixture<TableIzmenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableIzmenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
