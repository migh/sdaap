import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsRowComponent } from './flights-row.component';

describe('FlightsRowComponent', () => {
  let component: FlightsRowComponent;
  let fixture: ComponentFixture<FlightsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
