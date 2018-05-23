import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceReasonMasterComponent } from './bounce-reason-master.component';

describe('BounceReasonMasterComponent', () => {
  let component: BounceReasonMasterComponent;
  let fixture: ComponentFixture<BounceReasonMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BounceReasonMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BounceReasonMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
