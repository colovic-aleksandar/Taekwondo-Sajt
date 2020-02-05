import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Mail} from '../../../shared/mail.model'
import { UplatiComponent } from './uplati.component';

describe('UplatiComponent', () => {
  let component: UplatiComponent;
  let fixture: ComponentFixture<UplatiComponent>;
let poslatMail:Mail;
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
