import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcxAuthComponent } from './wcx-auth.component';

describe('WcxAuthComponent', () => {
  let component: WcxAuthComponent;
  let fixture: ComponentFixture<WcxAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcxAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WcxAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
