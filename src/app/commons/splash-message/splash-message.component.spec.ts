import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashMessageComponent } from './splash-message.component';

describe('SplashMessageComponent', () => {
  let component: SplashMessageComponent;
  let fixture: ComponentFixture<SplashMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
