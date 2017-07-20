import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAnimComponent } from './log-anim.component';

describe('LogAnimComponent', () => {
  let component: LogAnimComponent;
  let fixture: ComponentFixture<LogAnimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogAnimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
