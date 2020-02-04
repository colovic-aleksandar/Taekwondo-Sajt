import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKorisnikaComponent } from './update-korisnika.component';

describe('UpdateKorisnikaComponent', () => {
  let component: UpdateKorisnikaComponent;
  let fixture: ComponentFixture<UpdateKorisnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKorisnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
