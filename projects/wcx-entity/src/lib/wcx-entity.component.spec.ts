import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcxEntityComponent } from './wcx-entity.component';

describe('WcxEntityComponent', () => {
  let component: WcxEntityComponent;
  let fixture: ComponentFixture<WcxEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcxEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WcxEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
