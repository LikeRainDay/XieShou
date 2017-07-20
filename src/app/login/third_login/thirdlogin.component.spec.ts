import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdloginComponent } from './thirdlogin.component';

describe('ThirdloginComponent', () => {
  let component: ThirdloginComponent;
  let fixture: ComponentFixture<ThirdloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
