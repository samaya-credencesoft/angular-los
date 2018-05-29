import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingMasterComponent } from './sourcing-master.component';

describe('SourcingMasterComponent', () => {
  let component: SourcingMasterComponent;
  let fixture: ComponentFixture<SourcingMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcingMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
