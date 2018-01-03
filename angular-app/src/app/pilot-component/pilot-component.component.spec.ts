import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotComponentComponent } from './pilot-component.component';

describe('PilotComponentComponent', () => {
  let component: PilotComponentComponent;
  let fixture: ComponentFixture<PilotComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
