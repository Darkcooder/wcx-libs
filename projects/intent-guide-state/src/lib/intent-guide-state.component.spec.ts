import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentGuideStateComponent } from './intent-guide-state.component';

describe('IntentGuideStateComponent', () => {
  let component: IntentGuideStateComponent;
  let fixture: ComponentFixture<IntentGuideStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentGuideStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentGuideStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
